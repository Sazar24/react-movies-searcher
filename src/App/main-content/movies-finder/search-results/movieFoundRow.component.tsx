import * as React from 'react';
import { IMovieData } from './serverMovieData.interface';
import { Grid, Image } from 'semantic-ui-react';

interface IMovieFoundAsRow {
    movieItem: IMovieData;
}

class MovieFoundAsRow extends React.Component<IMovieFoundAsRow>{

    render() {
        const { movieItem } = this.props;
        return (
            <Grid.Row key={movieItem.imdbID} >
                <Grid.Column width={4}>
                    <Image src={movieItem.Poster} />
                </Grid.Column>
                <Grid.Column width={12} >
                    <h3> {movieItem.Title} </h3>
                    <p> year: {movieItem.Year} </p>
                    <p> Type: {movieItem.Type} </p>
                    {/* // TODO: onclick to see redirect to details */}
                </Grid.Column>
            </Grid.Row>

        )
    }

}

export default MovieFoundAsRow;