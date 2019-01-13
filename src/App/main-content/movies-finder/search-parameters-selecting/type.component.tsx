import * as React from 'react';
import { Segment, Header, Dropdown } from 'semantic-ui-react'
import { ISearchParamTileProps, IDropdownItemOption } from './ui-interfaces.model';



class SelectMovieTypeTile extends React.Component<ISearchParamTileProps> {
    constructor(props: ISearchParamTileProps) {
        super(props);
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>, { text, value }: IDropdownItemOption) => {
        this.props.apiService.changeMovieTypeSearchParam(value);
    }

    render() {

        const size = { width: "220px", height: "80px" };
        const moviesPossibleTypes: IDropdownItemOption[] = [
            { text: "movie", value: "movie" },
            { text: "series", value: "series" },
            { text: "episode", value: "episode" }
        ];

        return (
            <Segment style={size} circular >
                <Header sub> Type </Header>
                <Dropdown search selection clearable placeholder="select a type of movie"
                    options={moviesPossibleTypes}
                    onChange={this.handleChange} />
            </Segment>
        );
    }
}

export default SelectMovieTypeTile 