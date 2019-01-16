import { IDropdownItemOption } from '../model/ui-interfaces.model';

export default class YearsListMaker {
    private oldestMovieDateInYears: number = 1886;
    private listOfYearsFromFirstMovieTillNow: IDropdownItemOption[] = [];
    private currentYear: number = new Date().getFullYear();

    public getListOfYearsFromFirstMovieTillNow(): IDropdownItemOption[] {

        for (let i = this.oldestMovieDateInYears; i < this.currentYear; i++) {
            const newElement: IDropdownItemOption = {
                text: JSON.stringify(i),
                value: JSON.stringify(i),
            };
            this.listOfYearsFromFirstMovieTillNow.push(newElement);
        }

        this.listOfYearsFromFirstMovieTillNow.reverse();
        return this.listOfYearsFromFirstMovieTillNow;
    }

    public setStartingDate(oldestMovieYear: number): void {
        this.oldestMovieDateInYears = oldestMovieYear;
    }

    public setMaxYear(maxYear: number): void {
        this.currentYear = maxYear;
    }
}