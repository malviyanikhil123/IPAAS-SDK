import { post } from '../utils/http';

export class APIClient {
    constructor(
        private baseUrl: string,
        private apiKey: string,
    ) { }

    async send(path: string, body: any) {
        return post(`${this.baseUrl}${path}`, body, {
            Authorization: `Bearer ${this.apiKey}`,
        });
    }
}