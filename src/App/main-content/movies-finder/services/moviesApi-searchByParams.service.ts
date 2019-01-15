import axios from 'axios';
import IMovieData from '../search-results/models/serverMovieData.model';
import IApiRequestResponse from '../search-results/models/apiRequestResponse.model';

export default class MoviesApiSearchByParams {
    private title: string;
    private type: string;
    private year: string;
    private page: string;

    private resultPagesTotalAmmount: number;
    private moviesList: IMovieData[] = [];
    private apiUrl: string = "http://www.omdbapi.com/";

    public async attemptRequestGetMovies(title, type, year, page: any = "1"): Promise<boolean> {
        this.ensureAllParamsAreStringTyped(title, type, year, page);
        const requestResponse = await this.getMovies();

        if (this.isRequestSuccess(requestResponse)) {
            this.saveResponseData(requestResponse);
            return true;
        }
        else return false;
    }

    public async attemptReloadWithPageChanged(page) :Promise<boolean>{
        this.ensureAllParamsAreStringTyped(this.title, this.type, this.year, page);
        const requestResponse = await this.getMovies();

        if (this.isRequestSuccess(requestResponse)) {
            this.saveResponseData(requestResponse);
            return true;
        }
        else return false; 
    }

    public getDownloadedMoviesList(): IMovieData[] {
        if (this.moviesList.length === 0) throw new Error('Before trying to read "downloaded" movie-list, make request to api to download it.')
        return this.moviesList;
    }

    public getResultPagesTotalAmmount(): number {
        return this.resultPagesTotalAmmount;
    }

    public getCurrentPageValue(): number {
        const pageValueAsNumber: number = parseInt(this.page, 10);
        return pageValueAsNumber;
    }


    private setPagesTotalAmmount(ammount: number): void {
        const moviesPerPage: number = 10;
        this.resultPagesTotalAmmount = Math.ceil(ammount / moviesPerPage);
    }

    private async getMovies(): Promise<IApiRequestResponse> {
        const personalApiKey = process.env.REACT_APP_OMDB_API_PERSONAL_KEY;

        const requestUrl = this.apiUrl + "?apikey=" + personalApiKey + this.combineParamsToUrl();

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

    private ensureAllParamsAreStringTyped(title, type, year, page: any = "1"): void {
        this.title = this.ensureParamIsString(title);
        this.type = this.ensureParamIsString(type);
        this.year = this.ensureParamIsString(year);
        this.page = this.ensureParamIsString(page);
    }

    private ensureParamIsString(textValueFromJSONparser: string | string[] | null | undefined): string {
        if (typeof (textValueFromJSONparser) === "string")
            return textValueFromJSONparser;
        else return "";
    }

    private isRequestSuccess(response): boolean {
        if (response.Response === "True") return true;
        else return false;
    }

    private saveResponseData(response): void {
        this.moviesList = response.Search;
        this.setPagesTotalAmmount(response.totalResults)
    }
}