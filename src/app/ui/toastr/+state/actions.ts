import { createAction, props } from '@ngrx/store';

export const showToastr = createAction('[TOASTR] Show', props<{ level: 'success' | 'warn' | 'error', message: string }>());
