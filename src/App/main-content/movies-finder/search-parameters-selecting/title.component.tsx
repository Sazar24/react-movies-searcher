import * as React from 'react';
import { Segment, Header, Input} from 'semantic-ui-react'
import { ISearchParamTileProps } from './model/ui-interfaces.model';

class TitleSelectTile extends React.Component<ISearchParamTileProps>{
    constructor(props: ISearchParamTileProps) {
        super(props);
    }

    private handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.props.apiService.changeTitleSearchParam(e.target.value); 
    } 

    render() {
        return (
            <Segment circular >
                <Header sub> Title </Header>
                <Input onChange={this.handleChange} />
            </Segment>
        );
    }
}

export default TitleSelectTile 