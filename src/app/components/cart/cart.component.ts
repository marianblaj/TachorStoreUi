import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {ProductDetailsComponent} from "../products/product-details/product-details.component";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationCartComponent} from "./confirmation-cart/confirmation-cart.component";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res=>{
        this.products = res;
        this.grandTotal = this.cartService.getTotalPrice();
      })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  openOrderSend() {
    this.dialog.open(ConfirmationCartComponent, {
      data: {
        orderConfirmationDetails: "Your order has been send for processing."
      }
    });
    this.emptycart();
    this.getAllProductsIds();
  }

  getAllProductsIds(){
    this.cartService.getAllProductsIds();
  }


}
