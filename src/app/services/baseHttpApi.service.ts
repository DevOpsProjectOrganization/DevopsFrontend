import { HttpClient } from "@angular/common/http";
import { Inject } from "@angular/core";
import { Observable } from "rxjs";


export class BaseHttpApi<T>
{
    
    constructor(private httpClient : HttpClient, private baseUrl : string)
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