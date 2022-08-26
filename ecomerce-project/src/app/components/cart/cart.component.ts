import { Component, OnInit } from '@angular/core';
import { IProductItem } from 'src/app/models/model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProducts: IProductItem[] = [];
  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    this.cartProducts = this.productService.cartItems;
  }
  changeQuantity(){
  this.productService.cartItems=this.cartProducts;
  }
}
