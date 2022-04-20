import { Injectable } from '@angular/core';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

addToCart(product:Product){
let item = CartItems.find(c=>c.product.productId === product.productId)

}













}
