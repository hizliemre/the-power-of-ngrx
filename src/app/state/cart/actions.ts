import { Product } from '@models';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const cartActions = createActionGroup({
  source: 'CART STATE',
  events: {
    'Add': props<{ product: Product }>(),
    'Remove': props<{ id: number }>(),
    'Clear': emptyProps(),
  }
})
