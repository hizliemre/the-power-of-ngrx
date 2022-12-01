import { HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from '@ui/toastr';
import { filter, map, tap } from 'rxjs';
import * as actions from './actions';

@Injectable()
export class ToastrEffects {

  #actions$ = inject(Actions);
  #toastrService = inject(ToastrService)

  $showToastr = createEffect(() => this.#actions$.pipe(
    ofType(actions.showToastr),
    tap(({ level, message }) => this.#toastrService.showToastr(level, message))
  ), { dispatch: false });

  $showHttpErrorResponseToastr = createEffect(() => this.#actions$.pipe(
    filter((action) => action.error && action.error instanceof HttpErrorResponse),
    map(({ error }) => {
      const message = error.error.message || error.message;
      return this.#toastrService.actions.showToastr({ level: 'error', message });
    })
  ));

}
