import * as React from 'react';
import * as queryString from 'query-string';
import { Redirect } from 'react-router';
import MoviesApiSearchByParams from '../services/moviesApi-searchByParams.service';
import IMovieData from './models/serverMovieData.model';
import MovieListMapperWithPagginator from './movie-list-mapper.component';
import LoaderAndFailureInfo from './warns-and-loading/Loader-and-aboutfailureMessenger.component';


interface IState {
    moviesList: IMovieData[];
    currentPageNumber: number;
    totalResultPagesAmmount: number;
    isFetchingFailure: boolean;
}

class SearchResults extends React.Component<any, IState> {
    apiCaller: MoviesApiSearchByParams = new MoviesApiSearchByParams();

    constructor(props) {
        super(props);
        this.state = ({
            moviesList: [],
            currentPageNumber: 1,
            totalResultPagesAmmount: 0,
            isFetchingFailure: false
        })
    }


    redirectToSearchIfNoTitleIsGiven() {
        const urlParams = queryString.parse(this.props.location.search);

        if (!urlParams.title)
            return <Redirect to="/search" />
        else return;
    }


    async downloadMoviesToStateOrWarnWhenFailure() {
        const urlParams = queryString.parse(this.props.location.search);
        const { title, type, year, page } = urlParams;

        const isRequestSuccess: boolean = await this.apiCaller.attemptRequestGetMovies(title, type, year, page);
        if (isRequestSuccess) {
            const movies: IMovieData[] = this.apiCaller.getDownloadedMoviesList();
            this.setState({
                moviesList: movies,
                totalResultPagesAmmount: this.apiCaller.getResultPagesTotalAmmount()
            });
        }
        else this.setState({ isFetchingFailure: true });
    }

    componentWillMount() {
        this.downloadMoviesToStateOrWarnWhenFailure();
    }

    render() {
        const { moviesList, totalResultPagesAmmount, isFetchingFailure } = this.state;
        const isMovieListDownloaded: boolean = moviesList.length > 0;

        return (
            <div>
                {this.redirectToSearchIfNoTitleIsGiven()}

                {isMovieListDownloaded
                    ? <MovieListMapperWithPagginator
                        moviesList={moviesList}
                        totalResultPagesAmmount={totalResultPagesAmmount}
                    />
                    : ""}
                <LoaderAndFailureInfo isActive={!isMovieListDownloaded} fetchingHasFailed={isFetchingFailure} />
            </div>
        )
    }
}

export default SearchResults