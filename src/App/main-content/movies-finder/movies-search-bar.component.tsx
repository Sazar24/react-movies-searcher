import * as React from 'react';
import { Button, Segment, Portal, Header } from 'semantic-ui-react'
import SelectYearTile from './search-parameters-selecting/year.component';
import SelectMovieTypeTile from './search-parameters-selecting/type.component';
import TitleSelectTile from './search-parameters-selecting/title.component';
import ApiParameterStore from './services/apiParametersStore.service';
import { Redirect } from 'react-router-dom';

class MoviesSearchBar extends React.Component {
    state = {
        redirect: false,
        titleRequiredWarningShow: false
    }

    apiCallerService: ApiParameterStore = new ApiParameterStore();

    handleClick = () => {
        this.apiCallerService.showParams();
        if (this.apiCallerService.isTitleSet())
            this.setRedirect();
        else this.warnAboutTitleNeeded();
    }

    warnAboutTitleNeeded() {
        this.setState({ titleRequiredWarningShow: true });
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirectIfCalled() {
        if (this.state.redirect) {
            return <Redirect to={"search/result/" + this.apiCallerService.getParamsAsRoute()} />
        }
        else return;
    }

    render() {
        const centered = { marginLeft: "auto", marginRight: "auto", paddingBottom: "0px" };

        return (
            <div>
                <Segment style={centered} vertical compact>
                    <TitleSelectTile apiService={this.apiCallerService} />
                    <SelectMovieTypeTile apiService={this.apiCallerService} />
                    <SelectYearTile apiService={this.apiCallerService} />
                </Segment>
                <Button
                    onClick={this.handleClick}
                    style={{ width: "50%" }} circular
                >
                    Run search
                </Button>
                {this.renderRedirectIfCalled()}

                <Portal open={this.state.titleRequiredWarningShow} onClose={() => this.setState({ titleRequiredWarningShow: false })}>
                    <Segment style={{ left: '40%', position: 'fixed', top: '20%', zIndex: 1000 }}>
                        <Header>Title is required!</Header>
                        <p>Please set a title into proper box.</p>
                        <p>It will narrow down the search and possible results.</p>
                    </Segment>
                </Portal>
            </div >
        );
    }
}

export default MoviesSearchBar