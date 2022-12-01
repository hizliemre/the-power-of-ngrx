import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginActions } from './actions';
import { sessionSelectors } from './selectors';

@Injectable()
export class SessionService {

  #store = inject(Store);

  loading$ = this.#store.select(sessionSelectors.selectLoading);

  static loginActions = loginActions;

  login(data: Partial<{ username: string | null, password: string | null }>) {
    this.#store.dispatch(loginActions.login(data));
  }

}
