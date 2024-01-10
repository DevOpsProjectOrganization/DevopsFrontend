import { Component, Input } from "@angular/core";
import { Product } from "../../../models/product.model";

@Component({
    templateUrl: 'product.component.html',
    selector:'app-product',
    styleUrls: ['product.component.css']
    
})
export class ProductComponent
{
    @Input() model : Product
}