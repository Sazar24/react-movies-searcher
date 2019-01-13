import IMovieData from "./serverMovieData.model";

export default interface IMovieDataFullDetails extends IMovieData{
    Rated: string;
    Release: string;
    RuntTime: string;
    Genre: string;
    Director:string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Website: string;
    Response: string;

}

