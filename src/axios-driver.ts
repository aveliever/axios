import axios, { AxiosResponse } from 'axios';
import { IAxiosDriver } from '../src/';

export default class AxiosDriver implements IAxiosDriver {

    baseUrl: string = '';

    public set BaseUrl(baseUrl: string) {
        this.baseUrl = baseUrl;
    }
    
    public get BaseUrl() {
        return this.baseUrl;
    }

    // method for http get request with json response
    getWithJsonResponse = async (path: string): Promise<AxiosResponse> => {
        return await axios.get(
            `${this.baseUrl}${path}`, 
            {
                headers: {'Content-Type': 'application/json'},
                responseType: 'json', 
                responseEncoding: 'utf8'
            }
        );
    };

    // method for http post request with json response and json body
    postWithJsonResponseAndJsonBody = async (path: string, body: string): Promise<AxiosResponse> => {
        return await axios.post(
            `${this.baseUrl}${path}`, 
            body,
            {
                headers: {'Content-Type': 'application/json'},
                responseType: 'json', 
                responseEncoding: 'utf8'
            }
        );
        
    };

    // method for http put request with json response and json body
    putWithJsonResponseAndJsonBody = async (path: string, body: string): Promise<AxiosResponse> => {
        return await axios.put(
            `${this.baseUrl}${path}`, 
            body,
            {
                headers: {'Content-Type': 'application/json'},
                responseType: 'json', 
                responseEncoding: 'utf8'
            }
        );
    };

    // method for http patch request with json response and json body
    patchWithJsonResponseAndJsonBody = async (path: string, body: string): Promise<AxiosResponse> => {
        return await axios.patch(
            `${this.baseUrl}${path}`, 
            body,
            {
                headers: {'Content-Type': 'application/json'},
                responseType: 'json', 
                responseEncoding: 'utf8'
            }
        );
    };

    // method for http delete request with json response
    deleteWithJsonResponse = async (path: string): Promise<AxiosResponse> => {
        return await axios.delete(
            `${this.baseUrl}${path}`, 
            {
                headers: {'Content-Type': 'application/json'},
                responseType: 'json', 
                responseEncoding: 'utf8'
            }
        );
    };
}