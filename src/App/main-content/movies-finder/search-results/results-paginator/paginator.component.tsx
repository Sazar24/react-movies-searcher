import * as React from 'react';
import { Pagination, Icon } from 'semantic-ui-react';
import CurrentUrlParametersReader from './captureCurrentUrl.service';
import { Redirect } from 'react-router';
import * as queryString from 'query-string';
import UrlBuilder from '../../services/routeUrlBuilder.service';


import createHistory from 'history/createBrowserHistory';
import MoviesApiSearchByParams from '../../services/moviesApi-searchByParams.service';

interface IProps {
    totalResultPagesAmmount: number;
    currentPageNumber: number;
    reloadTrigger: (page: number) => Promise<void>;
}

interface IState {
    shouldRedirect: boolean;
    activePage: string;
}

class Paginator extends React.Component<IProps, IState>{
    urlBuilder: UrlBuilder = new UrlBuilder();
    constructor(props) {
        super(props);
        this.state = {
            shouldRedirect: false,
            activePage: ""
        }
    }

    private getPageNumberFromUrl(): string {
        const urlCurrentLocation = window.location.href; // Yeap. Thats not the best solution, but good enough to make things work.
        const queryStringFromUrl: string = queryString.extract(urlCurrentLocation);
        const urlParams: queryString.OutputParams = queryString.parse(queryStringFromUrl);
        const { page } = urlParams;

        return String(page);
    }

    private setPaginator(page: string): void {
        if (typeof (page) === 'string')
            this.setState({
                activePage: page
            });
    };

    componentWillMount() {
        const page: string = this.getPageNumberFromUrl();
        this.setPaginator(page);
    }

    private getParamsAndChangeRoute(pageNr: number) {
        const urlCurrentLocation = window.location.href; 
        this.urlBuilder.changeCurrentRoutePageParameter(urlCurrentLocation, pageNr);

    }
    

    private handlePaginationChange = (e: React.MouseEvent<HTMLAnchorElement>, { activePage }: any) => {
        this.getParamsAndChangeRoute(activePage);
        this.props.reloadTrigger(activePage);
    }


    render() {
        const { totalResultPagesAmmount } = this.props;

        return (
            <div>
                <Pagination
                    defaultActivePage={this.state.activePage}
                    totalPages={totalResultPagesAmmount}
                    siblingRange={2}
                    firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                    lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                    prevItem={{ content: <Icon name='angle left' />, icon: true }}
                    nextItem={{ content: <Icon name='angle right' />, icon: true }}
                    pointing
                    secondary
                    onPageChange={this.handlePaginationChange}
                />
            </div >
        )
    }
}

export default Paginator;