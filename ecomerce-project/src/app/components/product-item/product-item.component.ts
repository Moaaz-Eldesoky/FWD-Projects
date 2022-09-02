import { Component, Input, OnInit } from '@angular/core';
import { IProductItem } from 'src/app/models/model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProductItem = {} as IProductItem;
  arr: number[] = [2, 3, 4, 5, 6, 7, 8, 9];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.product.quantity = this.product.quantity || 1;
  }

  addToCart(product: IProductItem) {
    this.productService.addCart(product);
  }
  setQuantity(e: any) {
    this.product.quantity = e.target.value;
  }
  sendProductData(product:IProductItem){
    this.productService.getProductData(product)
  }
}
