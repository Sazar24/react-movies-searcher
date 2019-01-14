class UrlInterceptor {
    private capturedUrl: string;

    public getCurrentUrl(url:string):void{
        this.capturedUrl=url;
    }

    public extractParams(url:string):void{
        // const extractedUrl....... // YOU ARE HERE

    }
}

export default UrlInterceptor