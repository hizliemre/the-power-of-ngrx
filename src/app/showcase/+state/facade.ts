import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { pageActions } from './actions';

@Injectable()
export class ShowcasePageService {

  #store = inject(Store);

  initialize() {
    this.#store.dispatch(pageActions.initialize());
  }

}
