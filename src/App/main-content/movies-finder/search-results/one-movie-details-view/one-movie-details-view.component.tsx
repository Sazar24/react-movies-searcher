import * as React from 'react';
import ApiCaller from '../../services/apiCaller.service';
import * as queryString from 'query-string';
import ApiByIDCaller from '../../services/api-byIDCaller.service';
import IMovieDataFullDetails from '../models/serverMovieData-FullDetails.model';
import IMovieData from '../models/serverMovieData.model';
import { Grid, GridRow, Image } from 'semantic-ui-react';

interface IState {
    movieDetails: IMovieDataFullDetails | null;
}

class MovieDetails extends React.Component<any, IState>{
    apiCaller: ApiByIDCaller = new ApiByIDCaller();
    constructor(props) {
        super(props);
        this.state = ({
            movieDetails: null
        })
    }

    async getMovieById() {
        const movieId: string = this.props.match.params.movieId;
        const isRequestSucces: boolean = await this.apiCaller.attemptGetMovieById(movieId);
        if (!isRequestSucces) {
            throw new Error("given movie-id doesnt exist or sth is wrong with the connection. Program crashed `cuase of no time or need to script this out in any pretty way.")
        }
        else {
            this.setState({
                movieDetails: this.apiCaller.getMovieById()
            })
        }
    }

    componentWillMount() {
        this.getMovieById();
    }

    noDataYetMessage() {
        return (
            <div>
                <p> Movie details loading... Or maybe such movie does not exist. Or maybe sth is wrong with connection. </p>
                <p> Anyway... I am trying to load up the data you asked for</p>
            </div>
        )
    }

    render() {
        const { movieDetails } = this.state
        if (movieDetails === null)
            return this.noDataYetMessage();

        console.log("in render(): ", movieDetails);
        return (
            <div>
                <Grid centered>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            {movieDetails.Poster !== "N/A"
                                ? <Image src={movieDetails.Poster} />
                                : <h3> There is no image to this movie </h3>
                            }
                        </Grid.Column>
                        <Grid.Column width={8} >
                            <h3> {movieDetails.Title} ({movieDetails.Year}) </h3>
                            <p> Plot: {movieDetails.Plot} </p>
                            <p> Type: {movieDetails.Type} </p>
                            <p> Genre: {movieDetails.Genre} </p>
                            <p> Director: {movieDetails.Director} </p>
                            <p> Actors: {movieDetails.Actors} </p>
                            <p> Country: {movieDetails.Country} </p>
                        </Grid.Column>
                    </Grid.Row>


                </Grid>

            </div>
        );
    }
}

export default MovieDetails;