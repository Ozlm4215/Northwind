import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(product: Product) {
let item = CartItems.find(c=>c.product.productId === product.productId);
if (item) {
      item.quantity += 1;
    } else {
      let newCartItem = new CartItem();
      newCartItem.product = product;
      newCartItem.quantity = 1;
      CartItems.push(newCartItem);
    }
  }

  removeCartItem(product:Product)
  {
    let removeProduct:CartItem = CartItems.find(c=>c.product.productId === product.productId);
    CartItems.splice(CartItems.indexOf(removeProduct),1); // bu eleman dan itibaren 1 adet sil.
   }

list():CartItem[]{
  return CartItems;
}



}
