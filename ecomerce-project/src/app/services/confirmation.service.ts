import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationService {
  username:string=""
  bill:number=0
  constructor() {}
  generateConfirmation(name:string,total:number){
    this.username=name;
    this.bill=total
  }
}
