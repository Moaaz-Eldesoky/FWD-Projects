import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProductItem } from 'src/app/models/model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProductItem;
  @Output() addToCartForParent:EventEmitter<IProductItem>=new EventEmitter;
  arr: number[] = [2, 3, 4, 5, 6, 7, 8, 9];
  constructor(private productService: ProductService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      quantity: 0,
    };
  }
  ngOnInit(): void {
    this.product.quantity = this.product.quantity || 1;
  }

  addToCart(product: IProductItem) {
    this.addToCartForParent.emit(product);
  }
  setQuantity(e: any) {
    this.product.quantity = e;
  }
  sendProductData(product:IProductItem){          //to share Data between product-item and product-item-details
    this.productService.getProductData(product)
  }
}
