import * as React from 'react';
import { Pagination } from 'semantic-ui-react';
import UrlInterceptor from './captureCurrentUrl.service';

interface IProps {
    totalResultPagesAmmount: number;
}

class Paginator extends React.Component<IProps>{
    private currentPageNumber: number = 1;

    componentWillMount() {
        const urlCurrentLocation = window.location.href; // Yeap. Thats not the best solution, but good enough to make things work.
        // getCurrentUrl(...)
        // extractParamsFromIt()
        // changePageParameterValue()
        // redirect() // <-- refactor builder.service to return <Redirect to =.... />>

        const finishThatService = new UrlInterceptor;
        ----------------
        | you are here |
        ----------------
        
        // const reac


        // console.log("window.location.href: " + window.location.href);
        // TODO: tutaj przechwycić dane obecnego route`a, wygrepować z tego parametry i na onClick`u (changeState`em) zrobić Redirect do route`a ze zmienionym nr page`a.

    }



    render() {
        const moviesPerPage: number = 10;
        const { totalResultPagesAmmount } = this.props;

        return (
            <div>
                <Pagination
                    defaultActivePage={this.currentPageNumber}
                    totalPages={totalResultPagesAmmount}
                    lastItem={totalResultPagesAmmount}
                    firstItem={1}
                    pointing
                    secondary
                />
                totalPages: {totalResultPagesAmmount}
            </div>
        )
    }
}

export default Paginator;