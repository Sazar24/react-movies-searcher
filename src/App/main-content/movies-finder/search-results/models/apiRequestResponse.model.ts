import IMovieData from './serverMovieData.model';

export default interface IApiRequestResponse {
        Search :IMovieData[],
        Response,
        totalResults
}