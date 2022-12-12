import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GetAllProductsResponse } from '@models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsApi {

  #http = inject(HttpClient);

  getAllProducts(): Observable<GetAllProductsResponse> {
    return this.#http.get<GetAllProductsResponse>('/api/products');
  }

}
