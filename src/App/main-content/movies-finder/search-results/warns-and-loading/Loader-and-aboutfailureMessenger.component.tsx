import * as React from 'react';
import { Loader, Icon } from 'semantic-ui-react';

interface IProps {
    isActive: boolean;
    fetchingHasFailed: boolean;
}

export default class LoaderAndFailureInfo extends React.Component<IProps> {
    render() {
        const centered = { marginLeft: "auto", marginRight: "auto" };
        const { isActive, fetchingHasFailed } = this.props;

        return (
            <div>
                {fetchingHasFailed
                    ? <div>
                        <Icon name="frown outline" size="massive" />
                        <h2>
                            There was problem with the database-server or movie your are looking for does not exist.
                        </h2>
                    </div>
                    :
                    <Loader active={isActive} inline="centered" style={centered} >
                        <h3> Searching and loading data.</h3>
                        <p> If your movie does not exist, It won`t end... x) </p> {/* TODO */}
                    </Loader>
                }
            </div>
        )
    }
}