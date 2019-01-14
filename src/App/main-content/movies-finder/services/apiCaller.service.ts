import axios from 'axios';
import IMovieData from '../search-results/models/serverMovieData.model';
import IApiRequestResponse from '../search-results/models/apiRequestResponse.model';

export default class ApiCaller {
    private title: string;
    private type: string;
    private year: string;
    private page: string;
    private personalApiKey = process.env.REACT_APP_OMDB_API_PERSONAL_KEY;

    private resultPagesTotalAmmount: number;
    private moviesList: IMovieData[] = [];

    public async attemptRequestGetMovies(title, type, year, page: any = "1"): Promise<boolean> {
        this.title = this.ensureParamIsString(title);
        this.type = this.ensureParamIsString(type);
        this.year = this.ensureParamIsString(year);
        this.page = this.ensureParamIsString(page);

        const requestResponse = await this.getMovies(this.title, this.type, this.year);

        if (requestResponse.Response === "False") return false;
        else {
            this.moviesList = requestResponse.Search;
            this.setPagesTotalAmmount(requestResponse.totalResults)
            return true;
        }
    }

    public getMoviesList(): IMovieData[] {
        return this.moviesList;
    }

    public getResultPagesTotalAmmount(): number {
        return this.resultPagesTotalAmmount;
    }

    private setPagesTotalAmmount(ammount: number): void {
        const moviesPerPage: number = 10
        this.resultPagesTotalAmmount = Math.ceil(ammount / moviesPerPage);
    }

    private async getMovies(title: string, type: string, year: string): Promise<IApiRequestResponse> {
        const apiUrl: string = "http://www.omdbapi.com/"

        const requestUrl = apiUrl + "?&apikey=" + this.personalApiKey + this.combineParamsToUrl();
        const result = await axios.get(requestUrl);
        return result.data;
    }

    private combineParamsToUrl(): string {
        const combinedUrl: string = "&s=" + this.title +
            (this.type ? "&type=" + this.type : "") +
            (this.year ? "&year=" + this.year : "") +
            (this.page ? "&page=" + this.page : "");

        return combinedUrl;
    }

    private ensureParamIsString(textValueFromJSONparser: string | string[] | null | undefined): string {
        if (typeof (textValueFromJSONparser) === "string")
            return textValueFromJSONparser;
        else return "";
    }
}