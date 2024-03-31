import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavberComponent } from "./common/navber/navber.component";
import { ProductListComponent } from "./product/product-listings/product-listings.component";
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet,
      RouterLink,
      NavberComponent,
      ProductComponent,
      ProductListComponent,
      ProductDetailComponent
    ]
})
export class AppComponent {
  title = 'reservation-app';
}
