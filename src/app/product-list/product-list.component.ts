import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  list: Product[] = [];

  constructor(private httpService: HttpService) { }
  ngOnInit(): void {
    this.httpService.getProducts().subscribe(data => {
      this.list = data;
    });

  }
  addItemToCartAlert(itemName: string) {
    alert(`added ${itemName} succesfully`)
  }
}
