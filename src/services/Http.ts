import axios, { AxiosInstance, AxiosResponse } from "axios";

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

    public get(endpoint: string): Promise<AxiosResponse> {
        return this.instance.get(`${this.baseURL}${endpoint}`);
    }
}
