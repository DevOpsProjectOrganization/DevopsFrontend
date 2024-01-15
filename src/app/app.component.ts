import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AdListComponent } from './main-view/ads-view/ad-list/ad-list.component';
import { ProductListComponent } from './main-view/products-view/product-list/product-list.component';
import { DummyTabComponent } from './main-view/dummy-tab/dummy-tab.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
     RouterOutlet,
      AdListComponent, 
      ProductListComponent,
    DummyTabComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DevOpsFrontend';
}