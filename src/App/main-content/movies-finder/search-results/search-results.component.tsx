import * as React from 'react';
import * as queryString from 'query-string';
import { Redirect } from 'react-router';
import MoviesApiSearchByParams from '../services/moviesApi-searchByParams.service';
import IMovieData from './models/serverMovieData.model';
import MovieListMapperWithPagginator from './movie-list-mapper.component';
import LoaderAndFailureInfo from './warns-and-loading/LoaderAndFailureInfo.component';

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


    redirectToSearchIfNoTitleInRoute() {
        const urlParams: queryString.OutputParams = queryString.parse(this.props.location.search);

        if (!this.isTitleDefined(urlParams))
            return <Redirect to="/search" />
        else return;
    }


    async downloadMoviesToStateOrWarnWhenFailure() {
        const urlParams: queryString.OutputParams = queryString.parse(this.props.location.search);
        const { title, type, year, page } = urlParams;

        const isRequestSuccess: boolean = await this.apiCaller.attemptRequestGetMovies(title, type, year, page);
        if (isRequestSuccess) {
            this.saveDataAndUpdateState();
        }
        else this.updateStateThatRequestFailed();
    }

    reloadWithPageChanged = async (page: number) => {
        const pageAsString = page.toString();
        const isRequestSuccess: boolean = await this.apiCaller.attemptReloadWithPageChanged(pageAsString);
        if (isRequestSuccess) {
            this.saveDataAndUpdateState();
        }
        else this.updateStateThatRequestFailed();
    }


    isTitleDefined(urlParams: queryString.OutputParams) {
        if (urlParams.title) return true;
        else return false;
    }

    saveDataAndUpdateState(): void {
        const movies: IMovieData[] = this.apiCaller.getDownloadedMoviesList();
        this.setState({
            moviesList: movies,
            totalResultPagesAmmount: this.apiCaller.getResultPagesTotalAmmount(),
            currentPageNumber: this.apiCaller.getCurrentPageValue(),
        });
    }

    updateStateThatRequestFailed(): void {
        this.setState({ isFetchingFailure: true });
    }

    public componentWillMount() {
        this.downloadMoviesToStateOrWarnWhenFailure();
    }


    public render() { 
        const { moviesList, totalResultPagesAmmount, isFetchingFailure, currentPageNumber } = this.state;
        const isMovieListDownloaded: boolean = moviesList.length > 0;

        return (
            <div>
                {this.redirectToSearchIfNoTitleInRoute()}

                {isMovieListDownloaded
                    ? <MovieListMapperWithPagginator
                        moviesList={moviesList}
                        totalResultPagesAmmount={totalResultPagesAmmount}
                        currentPageNumber={currentPageNumber}
                        reloadTrigger={this.reloadWithPageChanged}
                    />
                    : ""}

                <LoaderAndFailureInfo
                    isActive={!isMovieListDownloaded}
                    fetchingHasFailed={isFetchingFailure}
                />
            </div>
        )
    }
}

export default SearchResults