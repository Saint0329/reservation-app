import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { products } from '../../products';

@Component({
  selector: 'app-product-listings',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './product-listings.component.html',
  styleUrl: './product-listings.component.css'
})

export class ProductListComponent{
  products: any = [1, 2, 3, 4];

  constructor(){}
  ngOnInit(){
    this.products=products
  }
}
