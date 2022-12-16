import { Product } from '@models';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeature, createReducer, on } from '@ngrx/store';
import { cartActions } from './actions';

interface CartState extends EntityState<Product> {
}

export const adapter = createEntityAdapter<Product>({
  selectId: (item) => item.id
})

const initialState: CartState = adapter.getInitialState();

const reducer = createReducer(initialState,
  on(cartActions.add, (state, { product }) => {
    return { ...adapter.addOne(product, state) };
  }),
  on(cartActions.remove, (state, { id }) => {
    return { ...adapter.removeOne(id, state) };
  }),
)

export const feature = createFeature({
  name: 'cart',
  reducer,
});
