import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {ApiService} from "../../services/api.service";
import {MatDialog} from '@angular/material/dialog';
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {WebsocketService} from "../../services/websocket.service";
import {ProductsService} from "../../services/products.service";
import {Product} from "../../model/product";

export interface ProductDetailsData {
  productDetails: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: Product[] = [];

  constructor(private api: ApiService,
              private cartService: CartService,
              private dialog: MatDialog,
              private ws: WebsocketService,
              private productService: ProductsService) {

    productService.getAll().subscribe(products => this.productList = products);
    ws.subscribe(product => {
      this.productList.push(product)
      this.productList = [...this.productList];
    });
  }


  openDetails(description: string) {
    this.dialog.open(ProductDetailsComponent, {
      data: {
        productDetails: description
      }
    });
  }


  ngOnInit(): void {

    // this.api.getProduct()
    //   .subscribe((res: any) => {
    //     this.productList = res;
    //
    //     this.productList.forEach((a: any) => {
    //       Object.assign(a, {quantity: 1, total: a.price});
    //     });
    //   })
  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }

}
