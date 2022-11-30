import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApi } from '@api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, tap } from 'rxjs';
import { loginActions } from './actions';

@Injectable()
export class SessionEffects {

  #actions$ = inject(Actions);
  #authApi = inject(AuthApi);
  #router = inject(Router);

  $login = createEffect(() => this.#actions$.pipe(
    ofType(loginActions.login),
    exhaustMap(({ username, password }) =>
      this.#authApi.login({ username, password })
        .pipe(
          map((user) => loginActions.loginSuccess({ user })),
          catchError((error) => [loginActions.loginFailure({ error })])
        )
    ))
  );

  $loginSuccessRedirect = createEffect(() => this.#actions$.pipe(
    ofType(loginActions.loginSuccess),
    tap(() => this.#router.navigateByUrl('/'))
  ), { dispatch: false });

}
