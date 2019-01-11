import ApiCaller from "./apiCaller.service";
import IMovieData from '../search-results/models/serverMovieData.model';

test('Server works, personal api-key is correct and valid, response-status == 200', async () => {
    const apiCaller = new ApiCaller();
    const isRequestOK: boolean = await apiCaller.attemptRequestGetMovies("doctor", "movie", "2000", "1");

    expect(isRequestOK).toBe(true);

    if (isRequestOK) {
        const moviesList: IMovieData[] = apiCaller.getMoviesList();
        expect(moviesList.length>0).toBe(true);
    }
});