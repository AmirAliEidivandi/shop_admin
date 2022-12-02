import axios from 'axios'

export default class Http {
    constructor(private baseURL: string) {
        this.baseURL = 'http://localhost:8080'
    }

    post (params: object) {}
}