import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<any> {
    return this.http.get<any>('./assets/data.json');
  }

}
