import { HttpErrorResponse } from '@angular/common/http';
import { GetAllProductsResponse } from '@models';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const apiActions = createActionGroup({
  source: 'PRODUCTS API',
  events: {
    'Get All Products': emptyProps(),
    'Get All Products Success': props<{ response: GetAllProductsResponse }>(),
    'Get All Products Failure': props<{ error: HttpErrorResponse }>()
  }
})
