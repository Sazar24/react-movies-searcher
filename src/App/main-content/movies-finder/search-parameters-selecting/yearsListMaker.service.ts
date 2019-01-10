export interface IDropdownListItem {
    text: string;
    value: string;
}


export default class YearsListMaker {
    private oldestMovieDateInYears: number = 1886;
    private listOfYearsFromFirstMovieTillNow: IDropdownListItem[] = [];

    public getListOfYearsFromFirstMovieTillNow(): IDropdownListItem[] {
        const currentYear: number = new Date().getFullYear();

        for (let i = this.oldestMovieDateInYears; i < currentYear; i++) {
            const newElement: IDropdownListItem = {
                text: JSON.stringify(i),
                value: JSON.stringify(i),
            };
            this.listOfYearsFromFirstMovieTillNow.push(newElement);
        }

        this.listOfYearsFromFirstMovieTillNow.reverse();
        return this.listOfYearsFromFirstMovieTillNow;
    }
}