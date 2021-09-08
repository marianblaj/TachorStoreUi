import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {ProductDetailsComponent} from "../products/product-details/product-details.component";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationCartComponent} from "./confirmation-cart/confirmation-cart.component";
import {LoginService} from "../../services/login.service";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  public products: any = [];
  public grandTotal !: number;

  constructor(private cartService: CartService,
              private dialog: MatDialog,
              private httpClient: HttpClient,
              loginService: LoginService) {
  }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;
        this.grandTotal = this.cartService.getTotalPrice();
      })
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  emptycart() {
    this.cartService.removeAllCart();
  }

  openOrderSend() {
    let message = '';
    if (!sessionStorage.getItem("username")) {
      message = 'Plese register first!';
    } else {
      message = 'Your order has been send for processing.';
      this.sendOrder();
    }
    this.dialog.open(ConfirmationCartComponent, {
      data: {
        orderConfirmationDetails: message
      }
    });

  }

  sendOrder() {
    this.cartService.sendOrder(sessionStorage.getItem("username"), this.getAllProductsIds()).subscribe();
    this.emptycart();
  }

  getAllProductsIds() {
    return this.cartService.getAllProductsIds();
  }


}
