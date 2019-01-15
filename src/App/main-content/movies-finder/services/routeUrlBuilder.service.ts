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
}