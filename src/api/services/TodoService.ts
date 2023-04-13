/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TodoService {

    /**
     * @returns any Default Response
     * @throws ApiError
     */
    public static getApiTodoGetById(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/todo/getById/{id}',
        });
    }

    /**
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postApiTodoPost(
        body?: {
            name: string;
            content: string;
            status_id: number;
            group_id: number;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/todo/post',
            body: body,
        });
    }

    /**
     * @returns any Default Response
     * @throws ApiError
     */
    public static putApiTodoUpdateById(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/todo/updateById/{id}',
        });
    }

    /**
     * @returns any Default Response
     * @throws ApiError
     */
    public static deleteApiTodoDeleteById(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/todo/deleteById/{id}',
        });
    }

}
