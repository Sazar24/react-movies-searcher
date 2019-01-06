import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './main-page/main-page.component';
import MoviesFinder from './movies-finder/movies-finder.component';
import SearchHistory from './search-history/search-history.component';
import About from './about/about.component';
import "./main-content.css";

class MainContent extends React.Component {
    render() {
        return (
            <div className="main-content">
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/search" component={MoviesFinder} />
                    <Route exact path="/history" component={SearchHistory} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </div>
        );
    }
}

export default MainContent;