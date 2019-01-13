import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import StartingPage from './starting-page/starting-page.component';
import MoviesSearchBar from './movies-finder/movies-search-bar.component';
import About from './about/about.component';
import "./router-content.css";
import SearchResults from './movies-finder/search-results/search-results.component';
import MovieDetails from './movies-finder/search-results/one-movie-details-view/one-movie-details-view.component';

class RouterContent extends React.Component {
    render() {
        return (
            <div className="main-content">
                <Switch>
                    <Route exact path="/" component={StartingPage} />
                    <Route exact path="/search" component={MoviesSearchBar} />
                    <Route path="/search/result/" component={SearchResults} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/details/:movieId" component={MovieDetails} />
                </Switch>
            </div>
        );
    }
}

export default RouterContent;