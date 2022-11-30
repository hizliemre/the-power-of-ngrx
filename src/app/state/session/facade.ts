import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginActions } from './actions';

@Injectable()
export class SessionService {

  #store = inject(Store);

  login(data: Partial<{ username: string | null, password: string | null }>) {
    this.#store.dispatch(loginActions.login(data));
  }

}
