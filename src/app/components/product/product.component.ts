import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded: boolean = false;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {} // ang ınjekta ediyor.

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => { // parametrelere bakıyor
      if (params['categoryId']) {
        this.getProductsByCategory(params['categoryId']);
      } else {
        this.getProducts();
      }
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  getProductsByCategory(categoryId: number) {
    // observable olanlara subscribe olmak gerekiyor.
    this.productService
      .getProductsByCategory(categoryId)
      .subscribe((response) => {
        this.products = response.data;
        this.dataLoaded = true;
      });
  }
}
