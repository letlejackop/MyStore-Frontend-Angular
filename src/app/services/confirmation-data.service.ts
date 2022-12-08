import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDataService {

  constructor() { }
  name: string = ''
  address: string = ''
  card: number = 1;
  getName(): string {
    return this.name;
  }
  setName(n: string): void {
    this.name = n;
  }
}
