export default class ApiParameterStore {
    private title: string;
    private type: string;
    private year: number;

    public changeTitleSearchParam(newTitle: string) {
        this.title = newTitle;
    }

    public changeMovieTypeSearchParam(newType: string) {
        this.type = newType;
    }

    public changeYearSearchParam(newYear: number) {
        this.year = newYear;
    }

    public showParams(): void {
        console.log(`my params are: 
                    title: ${this.title} 
                    type: ${this.type} 
                    year: ${this.year}
        `);
    }

    public isTitleSet(): boolean {
        if (this.title === undefined || this.title === null) return false;

        if (this.title.length > 0)
            return true;
        else return false;
    }

    public getParamsAsRoute(): string {
        let paramsConcated: string;
        const couplerMark: string = "&"

        paramsConcated = (this.title ? "?title=" + this.title : "")  +
            (this.type ? couplerMark + "type=" + this.type : "") +
            (this.year ? couplerMark + "year=" + this.year : "");

        return paramsConcated;
    }
}