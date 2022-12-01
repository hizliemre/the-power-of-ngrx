import { HttpErrorResponse } from '@angular/common/http';
import { User } from '@models';
import { createActionGroup, props } from '@ngrx/store';

export const loginActions = createActionGroup({
  source: 'AUTH API',
  events: {
    'Login': props<Partial<{ username: string | null, password: string | null }>>(),
    'Login Success': props<{ user: User }>(),
    'Login Failure': props<{ error: HttpErrorResponse }>()
  }
})
