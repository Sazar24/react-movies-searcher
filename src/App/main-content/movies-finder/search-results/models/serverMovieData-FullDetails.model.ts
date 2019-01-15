import IMovieData from "./serverMovieData.model";

export default interface IMovieDataFullDetails extends IMovieData{
    Rated: string;
    Release: string;
    Runtime: string;
    Genre: string;
    Director:string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Website: string;
    Response: string;

}

