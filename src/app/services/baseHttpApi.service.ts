import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


export class BaseHttpApi<T>
{
    public get baseUrl() : string
    {
        return this._baseUrl;
    }

    constructor(private httpClient : HttpClient, private _baseUrl : string)
    {

    }

    getElements() : Observable<T[]>
    {
        return this.httpClient.get<T[]>(this.baseUrl);
    }

    getElement(id : number) : Observable<T>
    {
        return this.httpClient.get<T>(`${this.baseUrl}/${id}`);
    }
}