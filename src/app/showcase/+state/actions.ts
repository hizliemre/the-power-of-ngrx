import { createActionGroup, emptyProps } from '@ngrx/store';

export const pageActions = createActionGroup({
  source: 'SHOWCASE PAGE',
  events: {
    'Initialize': emptyProps(),
    'Initialized': emptyProps(),
  }
})
