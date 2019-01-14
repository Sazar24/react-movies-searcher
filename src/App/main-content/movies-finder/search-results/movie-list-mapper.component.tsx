import * as React from 'react';
import IMovieData from './models/serverMovieData.model';
import { Grid } from 'semantic-ui-react';
import MoviesListItemAsRow from './movies-list-item-As-Row.component';
import Paginator from './results-paginator/paginator.component';

interface IProps {
    moviesList: IMovieData[];
    totalResultPagesAmmount: number;
}

export default class MovieListMapperWithPagginator extends React.Component<IProps> {

    render() {
        const style = { maxWidth: "900px", marginLeft: "auto", marginRight: "auto" };
        const { moviesList, totalResultPagesAmmount } = this.props;
        if (moviesList === undefined || moviesList.length === 0) return;

        return (
            <Grid style={style} divided celled>
                <Paginator totalResultPagesAmmount={totalResultPagesAmmount} />
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