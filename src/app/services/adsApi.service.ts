import { HttpClient } from "@angular/common/http";
import { BaseHttpApi } from "./baseHttpApi.service";
import { ADS_API_URL } from "../utils/constants";
import { Ad } from "../models/ad.model";
import { Injectable } from "@angular/core";

@Injectable()
export class AdsApi extends BaseHttpApi<Ad>
{
    constructor(httpClient : HttpClient)
    {
        super(httpClient, ADS_API_URL)
    }
}