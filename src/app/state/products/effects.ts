import { inject, Injectable } from '@angular/core';
import { ProductsApi } from '@api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs';
import { apiActions } from './actions';

@Injectable()
export class ProductsEffects {

  #actions$ = inject(Actions);
  #productsApi = inject(ProductsApi);

  $getAllProducts = createEffect(() => this.#actions$.pipe(
    ofType(apiActions.getAllProducts),
    switchMap(() =>
      this.#productsApi.getAllProducts()
        .pipe(
          map((response) => apiActions.getAllProductsSuccess({ response })),
          catchError((error) => [apiActions.getAllProductsFailure({ error })])
        )
    ))
  );

}
