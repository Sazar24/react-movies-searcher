import axios from 'axios';
import IMovieDataFullDetails from '../search-results/models/serverMovieData-FullDetails.model';


export default class MoviesApiSearchById {
    private apiUrl: string = "https://www.omdbapi.com/";
    private movieFoundById: IMovieDataFullDetails;

    public async attemptGetMovieById(id: string): Promise<boolean> {
        const requestUrl = this.getRequestUrl(id);
        const response: any = await axios.get(requestUrl);

        if (this.isRequestSuccess(response)) {
            this.saveResponseDataAsMovieData(response);
            return true;
        }
        else {
            return false;
        }
    }


    public getMovieById(): IMovieDataFullDetails {
        if (typeof (this.movieFoundById) === 'undefined') {
            throw new Error("First make server request to download movie data");
        }

        return this.movieFoundById;
    }

    private getRequestUrl(id: string): string {
        const personalApiKey = process.env.REACT_APP_OMDB_API_PERSONAL_KEY;
        const result = this.apiUrl + "?apikey=" + personalApiKey + "&i=" + id;

        return result;
    }

    private isRequestSuccess(response: any): boolean {
        if (response.Response === "False")
            return false;
        else return true;
    }

    private saveResponseDataAsMovieData(response) {
        this.movieFoundById = response.data;
    }
}