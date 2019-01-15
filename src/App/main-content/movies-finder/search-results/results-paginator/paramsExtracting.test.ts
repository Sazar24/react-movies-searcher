import * as queryString from 'query-string';

describe('should return expected params', () => {
    test('Queri-string proof: should return expected params for given url', () => {

        const url: string = "http://localhost:3000/search/result/?title=panda&page=1"

        const extracted = queryString.extract(url);
        const parsed = queryString.parse(extracted);
        
        const expectedValue = { page: '1', title: 'panda' };

        expect(parsed).toEqual(expectedValue);
    });

});