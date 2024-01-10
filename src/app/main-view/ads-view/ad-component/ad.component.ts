import { Component, Input } from "@angular/core";
import { Ad } from "../../../models/ad.model";

@Component({
    standalone: true,
    templateUrl: 'ad.component.html',
    selector:'app-ad',
    styleUrls: ['ad.component.css']
    
})
export class AdComponent
{
    @Input() model : Ad
}