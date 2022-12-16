import { inject, Injectable } from '@angular/core';
import { Product } from '@models';
import { Store } from '@ngrx/store';
import { cartActions } from './actions';
import { cartSelectors } from './selectors';

@Injectable()
export class CartService {

  #store = inject(Store);
  products$ = this.#store.select(cartSelectors.selectAll);
  total$ = this.#store.select(cartSelectors.selectTotal);
  price$ = this.#store.select(cartSelectors.selectPrice);

  add(product: Product) {
    this.#store.dispatch(cartActions.add({ product }));
  }

  remove(product: Product) {
    this.#store.dispatch(cartActions.remove({ id: product.id }));
  }


}
