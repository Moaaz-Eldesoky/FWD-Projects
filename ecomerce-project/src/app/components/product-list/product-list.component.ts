import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any = [];
  quantity: number = 0;
  cartList: any = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getProducts().subscribe((data) => {
      this.products = data;
    });
    this.httpService.getCartItems(this.cartList);
  }

  addToCart(product:any) {
    this.cartList.push(product);
    alert("Added to cart successfuly")
    console.log(this.cartList)
  }
}
