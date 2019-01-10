import * as React from 'react';
import * as queryString from 'query-string';
import { Redirect } from 'react-router';
import ApiCaller from '../services/apiCaller.service';
import { Grid, Dimmer, Loader } from 'semantic-ui-react';
import { IMovieData } from './serverMovieData.interface';
import MovieFoundAsRow from './movieFoundRow.component';


interface IState {
    moviesList: IMovieData[];
}

class SearchResults extends React.Component<any, IState> {
    apiCaller: ApiCaller = new ApiCaller();

    constructor(props) {
        super(props);
        this.state = ({
            moviesList: [],
        })
    }


    redirectToSearchIfNoTitleIsGiven() {
        const urlParams = queryString.parse(this.props.location.search);

        if (!urlParams.title)
            return <Redirect to="/search" />
        else return;
    }

    async componentWillMount() {
        const urlParams = queryString.parse(this.props.location.search);
        const { title, type, year } = urlParams;

        const serverResponse: any = await this.apiCaller.getMoviesByParams(title, type, year);
        const moviesListTyped: IMovieData[] = serverResponse;

        // console.log("moviesListTyped: " + moviesListTyped);
        this.setState({ moviesList: moviesListTyped });
    }

    render() {
        const { moviesList } = this.state;
        const style = { maxWidth: "900px", marginLeft: "auto", marginRight: "auto" };

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
                            <div>
                                <Dimmer active>
                                    <Loader>Loading</Loader>
                                </Dimmer>
                            </div>
                        )
                    }
                </Grid>
            </div>
        )
    }
}

export default SearchResults