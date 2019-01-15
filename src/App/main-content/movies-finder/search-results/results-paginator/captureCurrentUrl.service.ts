class CurrentUrlParametersReader {
    // this.urlPageParamChanger.getCurrentUrl(urlCurrentLocation);
    // this.urlPageParamChanger.convertUrlToParams()
    // this.urlPageParamChanger.changePageParamNumber(newNumber);
    // const newUrl = this.urlPageParamChanger.buildUrl()
    // <Redirect to={newUrl} />
    
    private capturedUrl: string;

    public getCurrentUrl(url: string): void {
        this.capturedUrl = url;
    }

    public extractParams(url: string): void {
        // const extractedUrl....... // YOU ARE HERE 
    }

}

export default CurrentUrlParametersReader