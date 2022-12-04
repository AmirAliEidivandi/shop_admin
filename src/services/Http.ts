import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export default class Http {
    private baseURL: string;
    private instance: AxiosInstance;
    constructor() {
        this.baseURL = "http://localhost:8080/";
        this.instance = axios.create();
    }

    public post(endpoint: string, params: object): Promise<AxiosResponse> {
        return this.instance.post(`${this.baseURL}${endpoint}`, params);
    }

    public get<T, R = AxiosResponse<T>>(endpoint: string, config?: AxiosRequestConfig): Promise<R> {
        return this.instance.get(`${this.baseURL}${endpoint}`, config);
    }
}
