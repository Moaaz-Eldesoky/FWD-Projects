import { Component, OnInit } from '@angular/core';
import { IProductItem } from 'src/app/models/model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css'],
})
export class ProductItemDetailsComponent implements OnInit {
  myProduct: IProductItem = {} as IProductItem;
  arr: number[] = [2, 3, 4, 5, 6, 7, 8, 9];

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.myProduct = this.productService.sigleProduct;
  }
  addToCart(product: IProductItem) {
    this.productService.addCart(product);
  }
  setQuantity(e: any) {
    this.myProduct.quantity = e.target.value;
  }
}
