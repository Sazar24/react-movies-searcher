import * as queryString from 'query-string';

test('query-string library working proof/test ', () => {
    // const url: string = "http://localhost:3000/results/?title=fooobar&type=episode&year=2017";
    const url: string = "http://localhost:3000/results/?title=fooobar&type=episode&year=2017";

    const extractedUrl = queryString.extract(url);
    expect(extractedUrl).toBe("title=fooobar&type=episode&year=2017");

    const parsed = queryString.parse(extractedUrl);
    expect(parsed).toEqual({ title: 'fooobar', type: 'episode', year: '2017' });
});