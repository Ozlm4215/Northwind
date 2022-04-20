import { ToastrService } from 'ngx-toastr';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[];
  constructor(private cartService: CartService,private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart()
  {
    this.cartItems = this.cartService.list();
  }

  removeCartItem(product:Product)
  {
    this.cartService.removeCartItem(product);
    this.toastrService.info(product.productName + " isimli ürün sepetten kaldırıldı! ")
  }

}
