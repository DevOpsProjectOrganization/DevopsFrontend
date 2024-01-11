import { Component, Input } from "@angular/core";
import { Product } from "../../../models/product.model";
import { ProductsApi } from "../../../services/productsApi.service";
import { ProductComponent } from "../product-component/product.component";
import { CommonModule } from "@angular/common";

@Component({
    standalone: true,
    templateUrl: 'product-list.component.html',
    selector:'app-product-list',
    styleUrls: ['product-list.component.css'],
    imports: [ProductComponent, CommonModule],
    providers: [ProductsApi]
    
})
export class ProductListComponent
{
    products : Product[];

    constructor(private productsApi : ProductsApi)
    {
        productsApi.getElements().subscribe((elements : Product[])=>
        {
            this.products = elements;
        })
    }
}