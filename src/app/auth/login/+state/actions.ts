import { createActionGroup, props } from '@ngrx/store';

export const pageActions = createActionGroup({
  source: 'LOGIN PAGE',
  events: {
    'Login': props<{ username: string | null, password: string | null }>(),
  }
})
