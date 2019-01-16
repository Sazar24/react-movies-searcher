import * as React from 'react';
import { Segment, Header, Dropdown } from 'semantic-ui-react'
import YearsListMaker from './service/yearsListMaker.service';
import { ISearchParamTileProps, IDropdownItemOption } from './model/ui-interfaces.model';

class SelectYearTile extends React.Component<ISearchParamTileProps> {
    constructor(props: ISearchParamTileProps) {
        super(props);
    }

    private handleChange = (e: React.ChangeEvent<HTMLInputElement>, { text, value }: IDropdownItemOption) => {
        this.props.apiService.changeYearSearchParam(value);
    }

    render() {
        const size = { width: "220px", height: "80px" };
        const yearsListMaker: YearsListMaker = new YearsListMaker();
        const listOfYears = yearsListMaker.getListOfYearsFromFirstMovieTillNow();

        return (
            <Segment style={size} circular >
                <Header sub> Year </Header>
                <Dropdown search selection clearable placeholder="select a year"
                    options={listOfYears}
                    onChange={this.handleChange} />
            </Segment>
        );
    }
}

export default SelectYearTile
