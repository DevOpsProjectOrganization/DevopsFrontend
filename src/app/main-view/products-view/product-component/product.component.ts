import { Component, Input } from "@angular/core";
import { Product } from "../../../models/product.model";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

@Component({
    standalone: true,
    templateUrl: 'product.component.html',
    selector:'app-product',
    styleUrls: ['product.component.css'],
    imports: [MatCardModule, MatButtonModule]
})
export class ProductComponent
{
    @Input() model : Product
}