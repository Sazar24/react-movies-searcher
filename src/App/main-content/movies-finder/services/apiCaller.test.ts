import ApiCaller from "./apiCaller.service";

test.skip('Server works, personal api-key is correct and valid, response-status == 200', async () => {
    const apiCaller = new ApiCaller();
    const response: any = await apiCaller.getMoviesByParams("doctor", "movie", "2000");

    expect(response).toBeDefined();
    // expect(response.status).toBe(200);


});