import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { apiActions } from './actions';
import { productsSelectors } from './selectors';

@Injectable()
export class ProductsService {

  #store = inject(Store);

  loading$ = this.#store.select(productsSelectors.selectLoading);
  products$ = this.#store.select(productsSelectors.selectAll);

  productsApiActions = apiActions;

  loadAllProducts() {
    this.#store.dispatch(apiActions.getAllProducts());
  }

}
