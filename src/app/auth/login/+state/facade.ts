import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { pageActions } from './actions';

@Injectable()
export class LoginPageService {

  #store = inject(Store);

  login(payload: { username: string | null, password: string | null }) {
    this.#store.dispatch(pageActions.login(payload));
  }

}
