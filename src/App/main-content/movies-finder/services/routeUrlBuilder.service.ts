import * as queryString from 'query-string';
import createHistory from 'history/createBrowserHistory';
import * as url from 'url';

export default class UrlBuilder {
    private title: string;
    private type: string;
    private year: string;
    private page: string;

    public changeTitleSearchParam(newTitle: string) {
        this.title = newTitle;
    }

    public changeMovieTypeSearchParam(newType: string) {
        this.type = newType;
    }

    public changeYearSearchParam(newYear: string) {
        this.year = newYear;
    }

    public changePageSearchParam(newPage: string) {
        this.page = newPage;
    }


    public isTitleSet(): boolean {
        if (this.title === undefined || this.title === null) return false;

        if (this.title.length > 0)
            return true;
        else return false;
    }


    public buildRoute(): string {
        let paramsConcated: string;
        const couplerMark: string = "&"
        
        paramsConcated = (this.title ? "?title=" + this.title : "") +
            (this.type ? couplerMark + "type=" + this.type : "") +
            (this.year ? couplerMark + "year=" + this.year : "") +
            (this.page ? couplerMark + "page=" + this.page : "&page=1")

        return paramsConcated;
    }

    public changeCurrentRoutePageParameter(oldUrl, newPageNr: string | number, ) {
        const urlCurrentLocation = oldUrl;
        const queryStringFromUrl: string = queryString.extract(urlCurrentLocation);
        const urlParams: queryString.OutputParams = queryString.parse(queryStringFromUrl);

        this.captureAndSaveDefinedParameters(urlParams, String(newPageNr));

        const rootUrl: string = queryString.parseUrl(urlCurrentLocation).url;
        this.changeCurrentUrl(rootUrl);


    }

    private captureAndSaveDefinedParameters(urlParameters: queryString.OutputParams, pageNr: string) {
        if (typeof (urlParameters.title) === 'string') this.changeTitleSearchParam(urlParameters.title);
        if (typeof (urlParameters.type) === 'string') this.changeMovieTypeSearchParam(urlParameters.type);
        if (typeof (urlParameters.year) === 'string') this.changeYearSearchParam(urlParameters.year);
        this.changePageSearchParam(pageNr);
    }


    private changeCurrentUrl(rootUrl: string): void {

        const urlAsObject = url.parse(rootUrl);
        const urlPathNameWithNoQueries = urlAsObject.pathname     // source: https://www.npmjs.com/package/url

        const history = createHistory();
        history.push(urlPathNameWithNoQueries + this.buildRoute());
    }
}