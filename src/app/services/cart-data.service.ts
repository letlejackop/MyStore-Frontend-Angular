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
    this.checkDuplicates()
    if (this.cart.length == 0) {
      return true
    } else {
      return false
    }
  }
  checkDuplicates(): void {
    if (this.cart.length == 0) {
      return;
    }
    if (this.cart.length == 1) {
      return;
    }
    let temp = this.cart[this.cart.length - 1].id
    for (let i = 0; i < this.cart.length - 1; i++) {
      if (this.cart[i].id === temp) {
        this.cart[i].amount++;
        this.cart.pop();
        break
      }
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
  }
}



