import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdComponent } from "../ad-component/ad.component";
import { Ad } from "../../../models/ad.model";
import { AdsApi } from "../../../services/adsApi.service";

@Component({
    standalone: true,
    templateUrl: 'ad-list.component.html',
    selector:'app-ad-list',
    styleUrls: ['ad-list.component.css'],
    imports: [AdComponent, CommonModule],
    providers: [AdsApi]
    
})
export class AdListComponent implements OnInit
{
    ads : Ad[];

    constructor(private adsApi : AdsApi)
    {
        console.log("SIR??")
        adsApi.getElements().subscribe((elements : Ad[])=>
        {
            console.log("MF gimme those elements:");
            console.log(elements);
            this.ads = elements;
        })
    }
    ngOnInit(): void {
       console.log("Da ti eba tupata maika");
    }
}