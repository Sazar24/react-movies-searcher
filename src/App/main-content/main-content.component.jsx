import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './main-page/main-page.component';
import MoviesSearchBar from './movies-finder/movies-search-bar.component';
import SearchHistory from './search-history/search-history.component';
import About from './about/about.component';
import "./main-content.css";
import SearchResults from './movies-finder/search-results/search-results.component';
import SearchComponents from './movies-finder/search-components.component';

class MainContent extends React.Component {
    render() {
        return (
            <div className="main-content">
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/search" component={MoviesSearchBar} />
                    <Route path="/search/result/" component={SearchResults} />
                    {/* <Route path="/search" component={SearchComponents} /> */}
                    <Route exact path="/history" component={SearchHistory} />
                    <Route exact path="/about" component={About} />
                    {/* <Route exact path="/details/:movieId" component={Details} /> */} {/* TODO */}
                </Switch>
            </div>
        );
    }
}

export default MainContent;