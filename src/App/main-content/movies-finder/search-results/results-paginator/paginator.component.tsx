import * as React from 'react';
import { Pagination } from 'semantic-ui-react';
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
    constructor(props) {
        super(props);
        this.state = {
            shouldRedirect: false,
            activePage: ""
        }
    }

    componentWillMount() {
        const urlCurrentLocation = window.location.href; // Yeap. Thats not the best solution, but good enough to make things work.
        const queryStringFromUrl: string = queryString.extract(urlCurrentLocation);
        const urlParams: queryString.OutputParams = queryString.parse(queryStringFromUrl);
        const { page } = urlParams;

        if (typeof (page) === 'string')
            this.setState({
                activePage: page
            });
    }

    getParamsAndChangeRoute(pageNr: number) {
        const urlBuilder: UrlBuilder = new UrlBuilder();
        const urlCurrentLocation = window.location.href; // Yeap. Thats not the best solution, but good enough to make things work.
        const queryStringFromUrl: string = queryString.extract(urlCurrentLocation);
        const urlParams: queryString.OutputParams = queryString.parse(queryStringFromUrl);

        if (typeof (urlParams.title) === 'string') urlBuilder.changeTitleSearchParam(urlParams.title);
        if (typeof (urlParams.year) === 'string') urlBuilder.changeYearSearchParam(urlParams.year);
        if (typeof (urlParams.type) === 'string') urlBuilder.changeTitleSearchParam(urlParams.type);
        // if (typeof (urlParams.page) === 'string') urlBuilder.changePageSearchParam(pageNr.toString());
        if (typeof (urlParams.page) === 'string') urlBuilder.changePageSearchParam(urlParams.page);

        const history = createHistory();
        history.push("/search/result/" + urlBuilder.buildRoute());
    }

    // redirectToChangedPageNumberRoute() {     // The simplest solution - but doesnt work. x)
    //     // const urlParams: queryString.OutputParams = queryString.parse(this.props.location.search);
    //     if (this.state.shouldRedirect)
    //         return <Redirect to={"/search/result/" + this.urlBuilder.buildRoute()} />
    //     else return;
    // }

    handlePaginationChange = (e: React.MouseEvent<HTMLAnchorElement>, { activePage }: any) => {
        this.getParamsAndChangeRoute(activePage);
        this.props.reloadTrigger(activePage);
    }


    render() {
        const { totalResultPagesAmmount } = this.props; 

        return (
            < div >
                <Pagination
                    defaultActivePage={this.state.activePage}
                    totalPages={totalResultPagesAmmount}
                    lastItem={totalResultPagesAmmount}
                    siblingRange={3}
                    firstItem={1}
                    pointing
                    secondary
                    onPageChange={this.handlePaginationChange}
                />
            </div >
        )
    }
}

export default Paginator;