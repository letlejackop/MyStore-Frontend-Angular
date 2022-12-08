import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class SharedDataForProductService {

  constructor() { }
  product: Product = new Product;
}

