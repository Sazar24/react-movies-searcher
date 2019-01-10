import axios from 'axios';

function ensureParamIsString(textOrNull: string | string[] | null | undefined): string { // TODO: move to service 
    if (typeof (textOrNull) === "string")
        return textOrNull;
    else return "";
}

export default class ApiCaller {
    private title: string;
    private type: string;
    private year: string;
    private personalApiKey: string = "6341c995" // TODO: move it to .env

    public async getMoviesByParams(title, type, year) {
        this.title = ensureParamIsString(title);
        this.type = ensureParamIsString(type);
        this.year = ensureParamIsString(year);

        return await this.getMovies(this.title, this.type, this.year);
    }

    private async getMovies(title: string, type: string, year: string) {
        const apiUrl: string = "http://www.omdbapi.com/"

        const requestUrl = apiUrl + "?&apikey=" + this.personalApiKey + this.combineParamsToUrl();
        console.log("request url: " + requestUrl);
        const result = await axios.get(requestUrl);
        console.log(result);
        return result.data.Search;
    }

    private combineParamsToUrl(): string {
        const combinedUrl: string = "&s=" + this.title +
            (this.type ? "&type=" + this.type : "") +
            (this.year ? "&year=" + this.year : "");


        console.log("combinedUrl: " + combinedUrl);
        return combinedUrl;
    }

}