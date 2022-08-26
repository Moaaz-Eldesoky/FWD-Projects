import { Injectable } from '@angular/core';
import { IProductItem } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cartItems: IProductItem[] = []; /////

  constructor() {}

  setCartItems(items: IProductItem[]) {
    this.cartItems = items;
  }
  addCart(item: IProductItem) {
    this.cartItems.push(item);
  }
  // updateProductQuantities(newItems: IProductItem[]) {

  // }
}
