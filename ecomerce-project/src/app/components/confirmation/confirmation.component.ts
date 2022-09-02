import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'src/app/services/confirmation.service';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  username:string=this.confirmationService.username;
  bill:number=this.confirmationService.bill;
  constructor(private confirmationService: ConfirmationService) {}
  ngOnInit(): void {}
}
