import { Component, OnInit } from '@angular/core';
import { IProductItem } from 'src/app/models/model';
import { ProductService } from 'src/app/services/product.service';
import { ConfirmationService } from 'src/app/services/confirmation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProducts: IProductItem[] = [];
  totalPrice: number = 0;

  fullName: string = '';
  addr: string = '';
  cridit: number = 0;

  constructor(
    private productService: ProductService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartProducts = this.productService.cartItems;
    this.calcTotalPrice();
  }
  changeQuantity() {
    this.productService.cartItems = this.cartProducts;
    this.reCalcTotalPrice();
  }

  removeCartItem(p_id: number) {
    this.productService.removeProduct(p_id);
    this.reCalcTotalPrice();
  }
  calcTotalPrice() {
    this.cartProducts.forEach((product) => {
      this.totalPrice += product.price * product.quantity;
    });
  }
  reCalcTotalPrice() {
    this.totalPrice = 0;
    this.cartProducts.forEach((product) => {
      this.totalPrice += product.price * product.quantity;
    });
  }
  submitAction() {
    this.confirmationService.generateConfirmation(
      this.fullName,
      this.totalPrice
    );
    this.productService.removeAllProducts();
    this.router.navigate(['/confirmation']);
  }
}
