import { unsplash } from '../../environments/environment'
import axios from 'axios';

export class ApiService {

    private domain: string = '';

    constructor() {
        this.domain = unsplash.unsplash;
    }

    handleErrors(res: any) {
        if (res.error && res.status !== 401) {
            console.log(res)
            throw new Error(res.message || 'Error')
        } else if (res.error && res.status === 401) {
            console.log(res)
            throw res;
        } else {
            return res;
        }
    }

    public getHeaders(sessionData?: any) {
        let headerObject: any = {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        };
        return headerObject;
    }

    public get(url: string, params?: any, reqOpts?: any, parseJson?: boolean): Promise<any> {
        if (!reqOpts) {
            reqOpts = {
                headers: this.getHeaders()
            }
        }
        let config = {
            method: 'GET',
            headers: reqOpts.headers
        };
        let queryString = params ? `?${this.getQueryString(params)}` : '';
        return axios.get(`${this.domain}${url}${queryString}`, config).then((response) => response).then(this.handleErrors)
    }

    private getQueryString(params: any) {
        let esc = encodeURIComponent;
        return Object.keys(params)
            .map(k => esc(k) + '=' + esc(params[k]))
            .join('&');
    }
}
