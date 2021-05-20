export interface IUrlParamInjectionConfig {
    key: string;
    value: any;
};

export abstract class BaseHttp {

    protected injectParamIntoUrl(
        url: string,
        params: Array<IUrlParamInjectionConfig>
    ): string {
        let transformedString: string = url;

        for (const param of params) {
            transformedString = transformedString.replace(
                param.key,
                param.value
            );
        }

        return transformedString;
    }

}
