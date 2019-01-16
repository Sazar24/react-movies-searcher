import { IDropdownItemOption } from '../model/ui-interfaces.model';
import YearsListMaker from "./yearsListMaker.service";

describe('years-list-maker-service returns proper value list', () => {
    test('should return proper years list (in format of parameter for semantic-ui component) ', () => {
        const myService: YearsListMaker = new YearsListMaker();

        myService.setStartingDate(2010);
        myService.setMaxYear(2015);

        const receivedYearsList: IDropdownItemOption[] = myService.getListOfYearsFromFirstMovieTillNow();
        const expectedResult: IDropdownItemOption[] = [
            { text: "2014", value: "2014" },
            { text: "2013", value: "2013" },
            { text: "2012", value: "2012" },
            { text: "2011", value: "2011" },
            { text: "2010", value: "2010" },
        ]

        expect(receivedYearsList).toEqual(expectedResult);
    });

});