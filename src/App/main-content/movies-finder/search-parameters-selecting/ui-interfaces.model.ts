import RouterUrlBuilder from '../services/routeUrlBuilder.service';

export interface ISearchParamTileProps {
    apiService: RouterUrlBuilder;
}

export interface IDropdownItemOption {
    text: string;
    value: string;
}