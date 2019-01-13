import * as React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import IMovieData from './models/serverMovieData.model';

interface IMovieFoundAsRow {
    movieItem: IMovieData;
}

class MoviesListItemAsRow extends React.Component<IMovieFoundAsRow>{

    render() {
        const { movieItem } = this.props;
        return (
            <Grid.Row key={movieItem.imdbID} >
                <Grid.Column width={4}>
                    {movieItem.Poster !== "N/A"
                        ? <Image src={movieItem.Poster} />
                        : <h3> There is no image to this movie </h3>
                    }
                </Grid.Column>
                <Grid.Column width={12} >
                    <h3> {movieItem.Title} </h3>
                    <p> year: {movieItem.Year} </p>
                    <p> Type: {movieItem.Type} </p>
                    <Link to={"/details/" + movieItem.imdbID}>
                        --click here to see movie details--
                    </Link>
                </Grid.Column>
            </Grid.Row>
        )
    }
}

export default MoviesListItemAsRow;