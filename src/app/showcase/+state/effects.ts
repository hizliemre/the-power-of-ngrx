import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from '@state/products';
import { map } from 'rxjs';
import { pageActions } from './actions';

@Injectable()
export class ShowcasePageEffects {

  #actions$ = inject(Actions);
  #productsService = inject(ProductsService);

  $initialize = createEffect(() => this.#actions$.pipe(
    ofType(pageActions.initialize),
    map(() => pageActions.initialized())
  ));

  $initialized = createEffect(() => this.#actions$.pipe(
    ofType(pageActions.initialized),
    map(() => this.#productsService.productsApiActions.getAllProducts())
  ));
}
