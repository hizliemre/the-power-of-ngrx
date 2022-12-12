import { Product } from '@models';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeature, createReducer, on } from '@ngrx/store';
import { apiActions } from './actions';

interface ProductsState extends EntityState<Product> {
  loading: boolean;
  loaded: boolean;
  products: Product[] | null;
}

const adapter = createEntityAdapter<Product>({
  selectId: (item) => item.id
})

const initialState = adapter.getInitialState({
  loading: false,
  loaded: false,
});

const reducer = createReducer(initialState,
  on(apiActions.getAllProducts, (state) => {
    return { ...adapter.removeAll(state), loading: true, loaded: false };
  }),
  on(apiActions.getAllProductsSuccess, (state, { response }) => {
    return { ...adapter.addMany(response.products, state), loading: false, loaded: true };
  }),
  on(apiActions.getAllProductsFailure, (state) => {
    return { ...state, loading: false, loaded: false };
  }),
)

export const feature = createFeature({
  name: 'products',
  reducer,
});
