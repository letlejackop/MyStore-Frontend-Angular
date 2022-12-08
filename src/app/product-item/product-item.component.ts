import { Component, Input } from '@angular/core';
import { Product } from '../models/Product';
import { CartDataService } from '../services/cart-data.service';
import { SharedDataForProductService } from '../services/shared-data-for-product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  amount: number = 1

  @Input() product: Product;
  constructor(private sharedDataForProduct: SharedDataForProductService, private cartData: CartDataService) {
    this.product = {
      id: 1,
      name: '',
      price: 1,
      url: '',
      description: ''
    }
  }
  onClickForDetail(): void {
    this.sharedDataForProduct.product = this.product;
  }
  onClick(p: Product): void {
    let temp = {
      id: p.id,
      name: p.name,
      price: p.price,
      url: p.url,
      description: p.description,
      amount: this.amount
    }
    this.cartData.cart.push(temp)
    this.cartData.EmptyHandle()
    alert(`added ${p.name} succesfully`)
  }
}
