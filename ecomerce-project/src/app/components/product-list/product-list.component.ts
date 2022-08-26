import { Component, OnInit } from '@angular/core';
import { IProductItem } from 'src/app/models/model';
import { HttpService } from 'src/app/services/http.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: IProductItem[] = [];
  quantity: number = 0;
  cartList: IProductItem[] = [];

  constructor(
    private httpService: HttpService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.httpService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

}
