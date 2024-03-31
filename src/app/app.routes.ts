import { Routes } from '@angular/router';
import { ProductListComponent } from './product/product-listings/product-listings.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { productModule } from './product/product.module';

export const routes: Routes = [
   {path: '',component:ProductListComponent},
   {path: ':productId',component:ProductDetailComponent}
];
