import { Injectable } from '@angular/core';
import { Cart } from "../models/Cart";

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  constructor() {

  }
  cart: Cart[] = []

  EmptyHandle(): boolean {
    if (this.cart.length == 0) {
      return true
    } else {
      return false
    }
  }

  CalcTotal(): number {
    if (this.cart.length == 0) {
      return 0;
    }
    let temp: number = 0
    for (let i = 0; i < this.cart.length; i++) {
      temp = temp + (this.cart[i].price * this.cart[i].amount);
    }
    return temp;
  }
  deleteItem(item: Cart) {
    this.cart = this.cart.filter(it => it.id !== item.id)
    console.log(this.cart.length)
  }
}



