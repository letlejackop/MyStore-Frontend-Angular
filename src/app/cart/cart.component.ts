import { Component, EventEmitter, OnInit } from '@angular/core';
import { CartDataService } from '../services/cart-data.service';
import { Cart } from "../models/Cart";
import { ConfirmationDataService } from '../services/confirmation-data.service';
import { Form } from '@angular/forms';
import { Router } from "@angular/router"

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartData: CartDataService, private confirmData: ConfirmationDataService, private router: Router) { }
  ngOnInit(): void {
  }
  total: number = this.cartData.CalcTotal()
  cart: Cart[] = this.cartData.cart
  empty: boolean = this.cartData.EmptyHandle()
  amountChangeFn(e: any): void {
    this.total = this.cartData.CalcTotal()
  }
  onClick(item: Cart): void {
    this.cart = this.cart.filter(it => it.id !== item.id)
    this.cartData.deleteItem(item)
    this.total = this.cartData.CalcTotal()
    this.empty = this.cartData.EmptyHandle()
  }
  name: string = "";
  address: string = "";
  cardNum: number | undefined;
  onSubmit(f: Form): void {
    this.confirmData.setName(this.name)
    console.log(this.confirmData.name);
    this.router.navigate(['/confirmation'])
  }

}
