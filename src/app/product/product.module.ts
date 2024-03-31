import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-listings/product-listings.component";
import { RouterLink, RouterModule, RouterOutlet, Routes } from "@angular/router";
import { Component, NgModule } from "@angular/core";

//export const routes: Routes = [
//    {path: '',component:ProductListComponent},
//    {path: 'detail',component:ProductDetailComponent}
//];

@NgModule({
    imports: [
      RouterOutlet,
      RouterLink,
      ProductListComponent,
      ProductDetailComponent
    ]
})

export class productModule {
}
