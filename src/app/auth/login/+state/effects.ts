import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SessionService } from '@state/session';
import { map } from 'rxjs';
import { pageActions } from './actions';

@Injectable()
export class LoginPageEffects {

  #actions$ = inject(Actions);
  #sessionService = inject(SessionService);

  $login = createEffect(() => this.#actions$.pipe(
    ofType(pageActions.login),
    map(({ username, password }) => this.#sessionService.actions.login({ username, password }))
  ));

}
