import { AxiosResponse } from 'axios';

export interface IAxiosDriver {

  BaseUrl: string;
  
  getWithJsonResponse: (path: string) => Promise<AxiosResponse>;

  postWithJsonResponseAndJsonBody: (path: string, body: string) => Promise<AxiosResponse>;

  putWithJsonResponseAndJsonBody: (path: string, body: string) => Promise<AxiosResponse>;

  deleteWithJsonResponse: (path: string) => Promise<AxiosResponse>;
}