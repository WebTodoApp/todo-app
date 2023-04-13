/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postApiAuthLogin(
        body?: {
            email: string;
            password: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/login',
            body: body,
        });
    }

    /**
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postApiAuthRegister(
        body?: {
            email: string;
            username: string;
            password: string;
            confirmPassword: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/register',
            body: body,
        });
    }

}
