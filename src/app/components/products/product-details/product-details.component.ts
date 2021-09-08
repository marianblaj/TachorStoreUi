import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ProductDetailsData} from "../products.component";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ProductDetailsData) {}
  ngOnInit(): void {
  }

}
