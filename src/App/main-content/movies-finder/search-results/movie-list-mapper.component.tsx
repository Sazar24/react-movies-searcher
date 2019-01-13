import * as React from 'react';
import IMovieData from './models/serverMovieData.model';
import { Grid } from 'semantic-ui-react';
import MoviesListItemAsRow from './movies-list-item-As-Row.component';

interface IProps {
    moviesList: IMovieData[];
    totalResultPagesAmmount: number;
}

export default class MovieListMapperWithPagginator extends React.Component<IProps> {

    render() {
        const style = { maxWidth: "900px", marginLeft: "auto", marginRight: "auto" };
        const { moviesList } = this.props;
        if (moviesList === undefined || moviesList.length === 0) return;

        return (
            <Grid style={style} divided celled>
                tu machnąć paginację.
                {moviesList.map((movieItem) => {
                    return <MoviesListItemAsRow
                        movieItem={movieItem}
                        key={movieItem.imdbID}
                    />
                })}
                tu machnąć paginację.
            </Grid>
        )
    }
}