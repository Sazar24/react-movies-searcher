import * as React from 'react';
import * as queryString from 'query-string';
import { Redirect } from 'react-router';
import ApiCaller from '../services/apiCaller.service';
import { Grid, Dimmer, Loader } from 'semantic-ui-react';
import MovieFoundAsRow from './movieFoundRow.component';
import IMovieData from './models/serverMovieData.model';


interface IState {
    moviesList: IMovieData[];
    currentPageNumber: number;
    totalResultPagesAmmount: number;
}

class SearchResults extends React.Component<any, IState> {
    apiCaller: ApiCaller = new ApiCaller();

    constructor(props) {
        super(props);
        this.state = ({
            moviesList: [],
            currentPageNumber: 1,
            totalResultPagesAmmount: 0
        })
    }

    async componentWillMount() {
        await this.downloadMoviesToStateOrWarnWhenFailure();
    }

    render() {
        const { moviesList } = this.state;
        const style = { maxWidth: "900px", marginLeft: "auto", marginRight: "auto" };
        const centered = { marginLeft: "auto", marginRight: "auto" };

        return (
            <div>
                {this.redirectToSearchIfNoTitleIsGiven()}

                <Grid style={style} divided celled>
                    {moviesList.length > 0 ? moviesList.map((movieItem) => {
                        return <MovieFoundAsRow
                            movieItem={movieItem}
                            key={movieItem.imdbID}
                        />
                    }) : (
                            <div style={centered}>
                                <Loader active inline="centered">
                                    <h3> Searching and loading data.</h3>
                                    <p> If your movie does not exist, It won`t end... x) </p> {/* TODO */}
                                </Loader>
                            </div>
                        )
                    }
                </Grid>
            </div>
        )
    }

    private redirectToSearchIfNoTitleIsGiven() {
        const urlParams = queryString.parse(this.props.location.search);

        if (!urlParams.title)
            return <Redirect to="/search" />
        else return;
    }


    private async downloadMoviesToStateOrWarnWhenFailure() {
        const urlParams = queryString.parse(this.props.location.search);
        const { title, type, year, page } = urlParams;

        const isRequestSuccess: boolean = await this.apiCaller.attemptRequestGetMovies(title, type, year, page);
        if (isRequestSuccess) {
            const movies: IMovieData[] = this.apiCaller.getMoviesList();
            this.setState({
                moviesList: movies,
                totalResultPagesAmmount: this.apiCaller.getResultPagesTotalAmmount()
            });
        }
        else console.log("There was some error during requesting movies-data or such movie does not exist");
    }
}

export default SearchResults