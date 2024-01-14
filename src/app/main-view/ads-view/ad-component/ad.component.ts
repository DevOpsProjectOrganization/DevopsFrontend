import { Component, Input } from "@angular/core";
import { Ad } from "../../../models/ad.model";
import {MatCardModule} from "@angular/material/card"
import {MatButtonModule} from '@angular/material/button';

@Component({
    standalone: true,
    templateUrl: 'ad.component.html',
    selector:'app-ad',
    styleUrls: ['ad.component.css'],
    imports: [MatCardModule, MatButtonModule]
})
export class AdComponent
{
    @Input() model : Ad
}