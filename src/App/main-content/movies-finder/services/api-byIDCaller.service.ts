import axios from 'axios';
import IMovieDataFullDetails from '../search-results/models/serverMovieData-FullDetails.model';


export default class ApiByIDCaller {
    private personalApiKey: string = "6341c995" // TODO: move it to .env
    private apiUrl: string = "http://www.omdbapi.com/"
    private movieFoundById: IMovieDataFullDetails;


    async attemptGetMovieById(id: string): Promise<boolean> {
        const requestUrl = this.apiUrl + "?&apikey=" + this.personalApiKey + "&i=" + id;
        const response: any = await axios.get(requestUrl);


        if (response.Response === "False") {
            return false;
        }
        else {
            this.movieFoundById = response.data;
            return true;
        }

    }

    getMovieById(): IMovieDataFullDetails {
        if (typeof (this.movieFoundById) === 'undefined') {
            throw new Error("First make server request to download movie data");
        }

        return this.movieFoundById;
    }
}