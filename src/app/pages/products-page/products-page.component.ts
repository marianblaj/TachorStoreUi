import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddProductFormComponent} from "../add-product-form/add-product-form.component";
import {ProductsService} from "../../services/products.service";
import {WebsocketService} from "../../services/websocket.service";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit, OnDestroy {

  constructor(private dialog: MatDialog,
              private productService: ProductsService,
              private ws: WebsocketService) {
  }

  ngOnInit(): void {
    this.ws.connect();
  }

  openProductDialog() {
    let dialogRef = this.dialog.open(AddProductFormComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.productService.save(result);
      }
    });
  }

  ngOnDestroy(): void {
    this.ws.disconnect();
  }
}
