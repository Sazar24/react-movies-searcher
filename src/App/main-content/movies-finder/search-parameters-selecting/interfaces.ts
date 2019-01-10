import ApiCaller from "../services/apiCaller.service";

export interface ISearchParamTileProps {
    apiService: ApiCaller;
}

export interface IDropdownItemOption {
    text: string;
    value: string;
}