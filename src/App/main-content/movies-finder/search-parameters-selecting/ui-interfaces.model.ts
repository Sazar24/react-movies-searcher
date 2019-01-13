import ApiParameterStore from "../services/apiParametersStore.service";

export interface ISearchParamTileProps {
    apiService: ApiParameterStore;
}

export interface IDropdownItemOption {
    text: string;
    value: string;
}