import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ProductDetailsData} from "../../products/products.component";

export interface OrderConfirmation {
  orderConfirmationDetails: string;
}
@Component({
  selector: 'app-confirmation-cart',
  templateUrl: './confirmation-cart.component.html',
  styleUrls: ['./confirmation-cart.component.css']
})
export class ConfirmationCartComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: OrderConfirmation) {}
  ngOnInit(): void {
  }


}
