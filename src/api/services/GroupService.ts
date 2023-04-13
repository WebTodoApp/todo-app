/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GroupService {

    /**
     * @returns any Default Response
     * @throws ApiError
     */
    public static getApiGroupAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/group/all',
        });
    }

    /**
     * @param groupId
     * @returns any Default Response
     * @throws ApiError
     */
    public static getApiGroup(
        groupId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/group/{groupId}',
            path: {
                'groupId': groupId,
            },
        });
    }

    /**
     * @param groupId
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static putApiGroup(
        groupId: number,
        body?: {
            name: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/group/{groupId}',
            path: {
                'groupId': groupId,
            },
            body: body,
        });
    }

    /**
     * @param groupId
     * @returns any Default Response
     * @throws ApiError
     */
    public static deleteApiGroup(
        groupId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/group/{groupId}',
            path: {
                'groupId': groupId,
            },
        });
    }

    /**
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postApiGroup(
        body?: {
            name: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/group/',
            body: body,
        });
    }

}
