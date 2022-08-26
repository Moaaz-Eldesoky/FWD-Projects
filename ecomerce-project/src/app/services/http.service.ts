import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  cartItems:any=[];

  constructor(private http: HttpClient) {
    this.getProducts().subscribe((data) => {
    });
    // this.getCartItems().subscribe((items) => {
    // });
  }

  getProducts(): Observable<any> {
    return this.http.get<any>('./assets/data.json');
  }
  getCartItems(items:any){
    this.cartItems=items;
  }

}
