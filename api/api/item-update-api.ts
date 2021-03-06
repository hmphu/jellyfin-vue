/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { BaseItemDto } from '../models';
// @ts-ignore
import { MetadataEditorInfo } from '../models';
// @ts-ignore
import { ProblemDetails } from '../models';
/**
 * ItemUpdateApi - axios parameter creator
 * @export
 */
export const ItemUpdateApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets metadata editor info for an item.
         * @param {string} itemId The item id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMetadataEditorInfo: async (itemId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            if (itemId === null || itemId === undefined) {
                throw new RequiredError('itemId','Required parameter itemId was null or undefined when calling getMetadataEditorInfo.');
            }
            const localVarPath = `/Items/{itemId}/MetadataEditor`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates an item.
         * @param {string} itemId The item id.
         * @param {BaseItemDto} baseItemDto The new item properties.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateItem: async (itemId: string, baseItemDto: BaseItemDto, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            if (itemId === null || itemId === undefined) {
                throw new RequiredError('itemId','Required parameter itemId was null or undefined when calling updateItem.');
            }
            // verify required parameter 'baseItemDto' is not null or undefined
            if (baseItemDto === null || baseItemDto === undefined) {
                throw new RequiredError('baseItemDto','Required parameter baseItemDto was null or undefined when calling updateItem.');
            }
            const localVarPath = `/Items/{itemId}`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof baseItemDto !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(baseItemDto !== undefined ? baseItemDto : {}) : (baseItemDto || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates an item\'s content type.
         * @param {string} itemId The item id.
         * @param {string} [contentType] The content type of the item.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateItemContentType: async (itemId: string, contentType?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            if (itemId === null || itemId === undefined) {
                throw new RequiredError('itemId','Required parameter itemId was null or undefined when calling updateItemContentType.');
            }
            const localVarPath = `/Items/{itemId}/ContentType`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }

            if (contentType !== undefined) {
                localVarQueryParameter['contentType'] = contentType;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ItemUpdateApi - functional programming interface
 * @export
 */
export const ItemUpdateApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets metadata editor info for an item.
         * @param {string} itemId The item id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMetadataEditorInfo(itemId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetadataEditorInfo>> {
            const localVarAxiosArgs = await ItemUpdateApiAxiosParamCreator(configuration).getMetadataEditorInfo(itemId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates an item.
         * @param {string} itemId The item id.
         * @param {BaseItemDto} baseItemDto The new item properties.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateItem(itemId: string, baseItemDto: BaseItemDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ItemUpdateApiAxiosParamCreator(configuration).updateItem(itemId, baseItemDto, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates an item\'s content type.
         * @param {string} itemId The item id.
         * @param {string} [contentType] The content type of the item.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateItemContentType(itemId: string, contentType?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ItemUpdateApiAxiosParamCreator(configuration).updateItemContentType(itemId, contentType, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ItemUpdateApi - factory interface
 * @export
 */
export const ItemUpdateApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Gets metadata editor info for an item.
         * @param {string} itemId The item id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMetadataEditorInfo(itemId: string, options?: any): AxiosPromise<MetadataEditorInfo> {
            return ItemUpdateApiFp(configuration).getMetadataEditorInfo(itemId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates an item.
         * @param {string} itemId The item id.
         * @param {BaseItemDto} baseItemDto The new item properties.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateItem(itemId: string, baseItemDto: BaseItemDto, options?: any): AxiosPromise<void> {
            return ItemUpdateApiFp(configuration).updateItem(itemId, baseItemDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates an item\'s content type.
         * @param {string} itemId The item id.
         * @param {string} [contentType] The content type of the item.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateItemContentType(itemId: string, contentType?: string, options?: any): AxiosPromise<void> {
            return ItemUpdateApiFp(configuration).updateItemContentType(itemId, contentType, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getMetadataEditorInfo operation in ItemUpdateApi.
 * @export
 * @interface ItemUpdateApiGetMetadataEditorInfoRequest
 */
export interface ItemUpdateApiGetMetadataEditorInfoRequest {
    /**
     * The item id.
     * @type {string}
     * @memberof ItemUpdateApiGetMetadataEditorInfo
     */
    readonly itemId: string
}

/**
 * Request parameters for updateItem operation in ItemUpdateApi.
 * @export
 * @interface ItemUpdateApiUpdateItemRequest
 */
export interface ItemUpdateApiUpdateItemRequest {
    /**
     * The item id.
     * @type {string}
     * @memberof ItemUpdateApiUpdateItem
     */
    readonly itemId: string

    /**
     * The new item properties.
     * @type {BaseItemDto}
     * @memberof ItemUpdateApiUpdateItem
     */
    readonly baseItemDto: BaseItemDto
}

/**
 * Request parameters for updateItemContentType operation in ItemUpdateApi.
 * @export
 * @interface ItemUpdateApiUpdateItemContentTypeRequest
 */
export interface ItemUpdateApiUpdateItemContentTypeRequest {
    /**
     * The item id.
     * @type {string}
     * @memberof ItemUpdateApiUpdateItemContentType
     */
    readonly itemId: string

    /**
     * The content type of the item.
     * @type {string}
     * @memberof ItemUpdateApiUpdateItemContentType
     */
    readonly contentType?: string
}

/**
 * ItemUpdateApi - object-oriented interface
 * @export
 * @class ItemUpdateApi
 * @extends {BaseAPI}
 */
export class ItemUpdateApi extends BaseAPI {
    /**
     * 
     * @summary Gets metadata editor info for an item.
     * @param {ItemUpdateApiGetMetadataEditorInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemUpdateApi
     */
    public getMetadataEditorInfo(requestParameters: ItemUpdateApiGetMetadataEditorInfoRequest, options?: any) {
        return ItemUpdateApiFp(this.configuration).getMetadataEditorInfo(requestParameters.itemId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates an item.
     * @param {ItemUpdateApiUpdateItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemUpdateApi
     */
    public updateItem(requestParameters: ItemUpdateApiUpdateItemRequest, options?: any) {
        return ItemUpdateApiFp(this.configuration).updateItem(requestParameters.itemId, requestParameters.baseItemDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates an item\'s content type.
     * @param {ItemUpdateApiUpdateItemContentTypeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemUpdateApi
     */
    public updateItemContentType(requestParameters: ItemUpdateApiUpdateItemContentTypeRequest, options?: any) {
        return ItemUpdateApiFp(this.configuration).updateItemContentType(requestParameters.itemId, requestParameters.contentType, options).then((request) => request(this.axios, this.basePath));
    }
}
