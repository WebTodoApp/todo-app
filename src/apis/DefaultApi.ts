/* tslint:disable */
/* eslint-disable */
/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ApiAuthLoginPostRequest,
  ApiAuthRegisterPostRequest,
} from '../models';
import {
    ApiAuthLoginPostRequestFromJSON,
    ApiAuthLoginPostRequestToJSON,
    ApiAuthRegisterPostRequestFromJSON,
    ApiAuthRegisterPostRequestToJSON,
} from '../models';

export interface ApiAuthLoginPostOperationRequest {
    body?: ApiAuthLoginPostRequest;
}

export interface ApiAuthRegisterPostOperationRequest {
    body?: ApiAuthRegisterPostRequest;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     */
    async apiAuthLoginPostRaw(requestParameters: ApiAuthLoginPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/auth/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ApiAuthLoginPostRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiAuthLoginPost(requestParameters: ApiAuthLoginPostOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiAuthLoginPostRaw(requestParameters, initOverrides);
    }

    /**
     */
    async apiAuthRegisterPostRaw(requestParameters: ApiAuthRegisterPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/auth/register`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ApiAuthRegisterPostRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiAuthRegisterPost(requestParameters: ApiAuthRegisterPostOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiAuthRegisterPostRaw(requestParameters, initOverrides);
    }

}