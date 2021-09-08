import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {WebsocketService} from "../../services/websocket.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  products: Product[] = [];
  displayedColumns = ['id', 'type', 'model', 'price'];

  constructor(private productService: ProductsService, private websocketService: WebsocketService) {
    productService.getAll().subscribe(products => this.products = products);
    websocketService.subscribe(product => {
      this.products.push(product)
      this.products = [...this.products];
    });
  }

  ngOnInit(): void {
  }

}

