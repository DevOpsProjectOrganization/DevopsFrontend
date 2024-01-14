import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
    standalone: true,
    templateUrl: 'dummy-tab.component.html',
    selector:'app-dummy-tab',
    styleUrls: ['dummy-tab.component.css'],
    imports: [FormsModule, MatFormFieldModule, MatInputModule]
    
})
export class DummyTabComponent
{
   
}