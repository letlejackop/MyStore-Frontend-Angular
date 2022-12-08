import { Component } from '@angular/core';
import { CartDataService } from '../services/cart-data.service';
import { ConfirmationDataService } from '../services/confirmation-data.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})

export class ConfirmationComponent {
  name: string = this.confirmData.getName();
  total: number = this.cartData.CalcTotal();

  constructor(private cartData: CartDataService, private confirmData: ConfirmationDataService) { }

  onClick(): void {
    this.cartData.cart = []
  }

}
