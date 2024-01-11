import { HttpClient } from "@angular/common/http";
import { BaseHttpApi } from "./baseHttpApi.service";
import { PRODUCTS_API_URL } from "../utils/constants";
import { Product } from "../models/product.model";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductsApi extends BaseHttpApi<Product>
{
    constructor(httpClient : HttpClient)
    {
        super(httpClient, PRODUCTS_API_URL)
    }
}