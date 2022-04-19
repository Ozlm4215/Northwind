import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = 'https://localhost:44314/api/products/getall';

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>> {
   return this.httpClient
      .get<ListResponseModel<Product>>(this.apiUrl);
      };
  }
