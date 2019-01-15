import * as React from 'react';
import { Button, Segment, Portal, Header } from 'semantic-ui-react'
import SelectYearTile from './search-parameters-selecting/year.component';
import SelectMovieTypeTile from './search-parameters-selecting/type.component';
import TitleSelectTile from './search-parameters-selecting/title.component';
import UrlBuilder from './services/routeUrlBuilder.service';
import { Redirect } from 'react-router-dom';
import { Row, Col } from 'react-grid-system';


class MoviesSearchBar extends React.Component {
    state = {
        shouldRedirect: false,
        titleRequiredWarningShow: false
    }

    apiCallerService: UrlBuilder = new UrlBuilder();

    handleClick = () => {
        if (this.apiCallerService.isTitleSet())
            this.setRedirect();
        else this.warnAboutTitleNeeded();
    }

    warnAboutTitleNeeded() {
        this.setState({ titleRequiredWarningShow: true });
    }

    setRedirect = () => {
        this.setState({
            shouldRedirect: true
        })
    }


    renderRedirectIfCalled() {
        const shouldRedirectPage: boolean = this.state.shouldRedirect ? true : false;

        if (shouldRedirectPage) {
            return <Redirect to={"search/result/" + this.apiCallerService.buildRoute()} />
        }
        else return;
    }


    render() {
        const centered = { marginLeft: "auto", marginRight: "auto", paddingBottom: "0px", };

        return (
            <div>
                {this.renderRedirectIfCalled()}
                <Segment style={centered} vertical compact>
                    <Row>
                        <Col xs={12} sm={6} md={4} lg={4} xl={4}>
                            <TitleSelectTile apiService={this.apiCallerService} />
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={4} xl={4}>
                            <SelectMovieTypeTile apiService={this.apiCallerService} />
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={4} xl={4}>
                            <SelectYearTile apiService={this.apiCallerService} />
                        </Col>
                    </Row>
                </Segment>
                <Button
                    onClick={this.handleClick}
                    style={{ width: "50%" }} circular
                >
                    Run search
                </Button>

                <Portal
                    open={this.state.titleRequiredWarningShow}
                    onClose={() => this.setState({ titleRequiredWarningShow: false })}
                >
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