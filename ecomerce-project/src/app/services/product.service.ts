import { Injectable } from '@angular/core';
import { IProductItem } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cartItems: IProductItem[] = [];
  sigleProduct: IProductItem = {} as IProductItem;

  constructor() {}

  setCartItems(items: IProductItem[]) {
    this.cartItems = items;
  }
  addCart(item: IProductItem) {
    if (!this.cartItems.find((e) => e.id == item.id)) {
      this.cartItems.push(item);
      alert('product added successfully');
    } else {
      alert('this item already exist on your cart');
    }
  }
  removeProduct(p_id: number) {
    const indexOfProd = this.cartItems.findIndex((object) => {
      return object.id === p_id;
    });
    this.cartItems.splice(indexOfProd, 1);
    alert('product removed successffuly');
  }
  removeAllProducts() {
    this.cartItems=[];
  }
  getProductData(product: IProductItem) {
    this.sigleProduct = product;
  }
  // updateProductQuantities(newItems: IProductItem[]) {

  // }
}
