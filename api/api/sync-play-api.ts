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
import { GroupInfoView } from '../models';
/**
 * SyncPlayApi - axios parameter creator
 * @export
 */
export const SyncPlayApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Request group wait in SyncPlay group while buffering.
         * @param {string} [when] When the request has been made by the client.
         * @param {number} [positionTicks] The playback position in ticks.
         * @param {boolean} [bufferingDone] Whether the buffering is done.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        syncPlayBuffering: async (when?: string, positionTicks?: number, bufferingDone?: boolean, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/SyncPlay/Buffering`;
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

            if (when !== undefined) {
                localVarQueryParameter['when'] = (when as any instanceof Date) ?
                    (when as any).toISOString() :
                    when;
            }

            if (positionTicks !== undefined) {
                localVarQueryParameter['positionTicks'] = positionTicks;
            }

            if (bufferingDone !== undefined) {
                localVarQueryParameter['bufferingDone'] = bufferingDone;
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
         * @summary Create a new SyncPlay group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        syncPlayCreateGroup: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/SyncPlay/New`;
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
         * @summary Gets all SyncPlay groups.
         * @param {string} [filterItemId] Optional. Filter by item id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        syncPlayGetGroups: async (filterItemId?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/SyncPlay/List`;
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

            if (filterItemId !== undefined) {
                localVarQueryParameter['filterItemId'] = filterItemId;
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
         * @summary Join an existing SyncPlay group.
         * @param {string} groupId The sync play group id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        syncPlayJoinGroup: async (groupId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            if (groupId === null || groupId === undefined) {
                throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling syncPlayJoinGroup.');
            }
            const localVarPath = `/SyncPlay/Join`;
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

            if (groupId !== undefined) {
                localVarQueryParameter['groupId'] = groupId;
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
         * @summary Leave the joined SyncPlay group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        syncPlayLeaveGroup: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/SyncPlay/Leave`;
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
         * @summary Request pause in SyncPlay group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        syncPlayPause: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/SyncPlay/Pause`;
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
         * @summary Update session ping.
         * @param {number} [ping] The ping.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        syncPlayPing: async (ping?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/SyncPlay/Ping`;
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

            if (ping !== undefined) {
                localVarQueryParameter['ping'] = ping;
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
         * @summary Request play in SyncPlay group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        syncPlayPlay: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/SyncPlay/Play`;
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
         * @summary Request seek in SyncPlay group.
         * @param {number} [positionTicks] The playback position in ticks.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        syncPlaySeek: async (positionTicks?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/SyncPlay/Seek`;
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

            if (positionTicks !== undefined) {
                localVarQueryParameter['positionTicks'] = positionTicks;
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
 * SyncPlayApi - functional programming interface
 * @export
 */
export const SyncPlayApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Request group wait in SyncPlay group while buffering.
         * @param {string} [when] When the request has been made by the client.
         * @param {number} [positionTicks] The playback position in ticks.
         * @param {boolean} [bufferingDone] Whether the buffering is done.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async syncPlayBuffering(when?: string, positionTicks?: number, bufferingDone?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await SyncPlayApiAxiosParamCreator(configuration).syncPlayBuffering(when, positionTicks, bufferingDone, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Create a new SyncPlay group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async syncPlayCreateGroup(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await SyncPlayApiAxiosParamCreator(configuration).syncPlayCreateGroup(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets all SyncPlay groups.
         * @param {string} [filterItemId] Optional. Filter by item id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async syncPlayGetGroups(filterItemId?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GroupInfoView>>> {
            const localVarAxiosArgs = await SyncPlayApiAxiosParamCreator(configuration).syncPlayGetGroups(filterItemId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Join an existing SyncPlay group.
         * @param {string} groupId The sync play group id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async syncPlayJoinGroup(groupId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await SyncPlayApiAxiosParamCreator(configuration).syncPlayJoinGroup(groupId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Leave the joined SyncPlay group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async syncPlayLeaveGroup(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await SyncPlayApiAxiosParamCreator(configuration).syncPlayLeaveGroup(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Request pause in SyncPlay group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async syncPlayPause(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await SyncPlayApiAxiosParamCreator(configuration).syncPlayPause(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update session ping.
         * @param {number} [ping] The ping.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async syncPlayPing(ping?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await SyncPlayApiAxiosParamCreator(configuration).syncPlayPing(ping, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Request play in SyncPlay group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async syncPlayPlay(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await SyncPlayApiAxiosParamCreator(configuration).syncPlayPlay(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Request seek in SyncPlay group.
         * @param {number} [positionTicks] The playback position in ticks.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async syncPlaySeek(positionTicks?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await SyncPlayApiAxiosParamCreator(configuration).syncPlaySeek(positionTicks, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SyncPlayApi - factory interface
 * @export
 */
export const SyncPlayApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Request group wait in SyncPlay group while buffering.
         * @param {string} [when] When the request has been made by the client.
         * @param {number} [positionTicks] The playback position in ticks.
         * @param {boolean} [bufferingDone] Whether the buffering is done.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        syncPlayBuffering(when?: string, positionTicks?: number, bufferingDone?: boolean, options?: any): AxiosPromise<void> {
            return SyncPlayApiFp(configuration).syncPlayBuffering(when, positionTicks, bufferingDone, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create a new SyncPlay group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        syncPlayCreateGroup(options?: any): AxiosPromise<void> {
            return SyncPlayApiFp(configuration).syncPlayCreateGroup(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets all SyncPlay groups.
         * @param {string} [filterItemId] Optional. Filter by item id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        syncPlayGetGroups(filterItemId?: string, options?: any): AxiosPromise<Array<GroupInfoView>> {
            return SyncPlayApiFp(configuration).syncPlayGetGroups(filterItemId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Join an existing SyncPlay group.
         * @param {string} groupId The sync play group id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        syncPlayJoinGroup(groupId: string, options?: any): AxiosPromise<void> {
            return SyncPlayApiFp(configuration).syncPlayJoinGroup(groupId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Leave the joined SyncPlay group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        syncPlayLeaveGroup(options?: any): AxiosPromise<void> {
            return SyncPlayApiFp(configuration).syncPlayLeaveGroup(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Request pause in SyncPlay group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        syncPlayPause(options?: any): AxiosPromise<void> {
            return SyncPlayApiFp(configuration).syncPlayPause(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update session ping.
         * @param {number} [ping] The ping.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        syncPlayPing(ping?: number, options?: any): AxiosPromise<void> {
            return SyncPlayApiFp(configuration).syncPlayPing(ping, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Request play in SyncPlay group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        syncPlayPlay(options?: any): AxiosPromise<void> {
            return SyncPlayApiFp(configuration).syncPlayPlay(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Request seek in SyncPlay group.
         * @param {number} [positionTicks] The playback position in ticks.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        syncPlaySeek(positionTicks?: number, options?: any): AxiosPromise<void> {
            return SyncPlayApiFp(configuration).syncPlaySeek(positionTicks, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for syncPlayBuffering operation in SyncPlayApi.
 * @export
 * @interface SyncPlayApiSyncPlayBufferingRequest
 */
export interface SyncPlayApiSyncPlayBufferingRequest {
    /**
     * When the request has been made by the client.
     * @type {string}
     * @memberof SyncPlayApiSyncPlayBuffering
     */
    readonly when?: string

    /**
     * The playback position in ticks.
     * @type {number}
     * @memberof SyncPlayApiSyncPlayBuffering
     */
    readonly positionTicks?: number

    /**
     * Whether the buffering is done.
     * @type {boolean}
     * @memberof SyncPlayApiSyncPlayBuffering
     */
    readonly bufferingDone?: boolean
}

/**
 * Request parameters for syncPlayGetGroups operation in SyncPlayApi.
 * @export
 * @interface SyncPlayApiSyncPlayGetGroupsRequest
 */
export interface SyncPlayApiSyncPlayGetGroupsRequest {
    /**
     * Optional. Filter by item id.
     * @type {string}
     * @memberof SyncPlayApiSyncPlayGetGroups
     */
    readonly filterItemId?: string
}

/**
 * Request parameters for syncPlayJoinGroup operation in SyncPlayApi.
 * @export
 * @interface SyncPlayApiSyncPlayJoinGroupRequest
 */
export interface SyncPlayApiSyncPlayJoinGroupRequest {
    /**
     * The sync play group id.
     * @type {string}
     * @memberof SyncPlayApiSyncPlayJoinGroup
     */
    readonly groupId: string
}

/**
 * Request parameters for syncPlayPing operation in SyncPlayApi.
 * @export
 * @interface SyncPlayApiSyncPlayPingRequest
 */
export interface SyncPlayApiSyncPlayPingRequest {
    /**
     * The ping.
     * @type {number}
     * @memberof SyncPlayApiSyncPlayPing
     */
    readonly ping?: number
}

/**
 * Request parameters for syncPlaySeek operation in SyncPlayApi.
 * @export
 * @interface SyncPlayApiSyncPlaySeekRequest
 */
export interface SyncPlayApiSyncPlaySeekRequest {
    /**
     * The playback position in ticks.
     * @type {number}
     * @memberof SyncPlayApiSyncPlaySeek
     */
    readonly positionTicks?: number
}

/**
 * SyncPlayApi - object-oriented interface
 * @export
 * @class SyncPlayApi
 * @extends {BaseAPI}
 */
export class SyncPlayApi extends BaseAPI {
    /**
     * 
     * @summary Request group wait in SyncPlay group while buffering.
     * @param {SyncPlayApiSyncPlayBufferingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SyncPlayApi
     */
    public syncPlayBuffering(requestParameters: SyncPlayApiSyncPlayBufferingRequest = {}, options?: any) {
        return SyncPlayApiFp(this.configuration).syncPlayBuffering(requestParameters.when, requestParameters.positionTicks, requestParameters.bufferingDone, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create a new SyncPlay group.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SyncPlayApi
     */
    public syncPlayCreateGroup(options?: any) {
        return SyncPlayApiFp(this.configuration).syncPlayCreateGroup(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets all SyncPlay groups.
     * @param {SyncPlayApiSyncPlayGetGroupsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SyncPlayApi
     */
    public syncPlayGetGroups(requestParameters: SyncPlayApiSyncPlayGetGroupsRequest = {}, options?: any) {
        return SyncPlayApiFp(this.configuration).syncPlayGetGroups(requestParameters.filterItemId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Join an existing SyncPlay group.
     * @param {SyncPlayApiSyncPlayJoinGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SyncPlayApi
     */
    public syncPlayJoinGroup(requestParameters: SyncPlayApiSyncPlayJoinGroupRequest, options?: any) {
        return SyncPlayApiFp(this.configuration).syncPlayJoinGroup(requestParameters.groupId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Leave the joined SyncPlay group.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SyncPlayApi
     */
    public syncPlayLeaveGroup(options?: any) {
        return SyncPlayApiFp(this.configuration).syncPlayLeaveGroup(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Request pause in SyncPlay group.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SyncPlayApi
     */
    public syncPlayPause(options?: any) {
        return SyncPlayApiFp(this.configuration).syncPlayPause(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update session ping.
     * @param {SyncPlayApiSyncPlayPingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SyncPlayApi
     */
    public syncPlayPing(requestParameters: SyncPlayApiSyncPlayPingRequest = {}, options?: any) {
        return SyncPlayApiFp(this.configuration).syncPlayPing(requestParameters.ping, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Request play in SyncPlay group.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SyncPlayApi
     */
    public syncPlayPlay(options?: any) {
        return SyncPlayApiFp(this.configuration).syncPlayPlay(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Request seek in SyncPlay group.
     * @param {SyncPlayApiSyncPlaySeekRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SyncPlayApi
     */
    public syncPlaySeek(requestParameters: SyncPlayApiSyncPlaySeekRequest = {}, options?: any) {
        return SyncPlayApiFp(this.configuration).syncPlaySeek(requestParameters.positionTicks, options).then((request) => request(this.axios, this.basePath));
    }
}
