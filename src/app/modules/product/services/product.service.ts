import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

/**
 * This is mock service!!
 */
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl: string = `${environment.apiUrl}products/`;

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl);
  }

  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseUrl}${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.baseUrl}${product.id}`, product);
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(`${this.baseUrl}${id}`);
  }
}
