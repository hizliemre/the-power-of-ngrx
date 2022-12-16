import { createSelector } from '@ngrx/store';
import { adapter, feature } from './reducers';


const { selectAll, selectTotal } = adapter.getSelectors(feature.selectCartState);
const selectPrice = createSelector(selectAll, items => items.reduce((acc, item) => acc + item.price, 0));

const { name, reducer, selectCartState, ...featureSelectors } = feature

export const cartSelectors = {
  ...featureSelectors,
  selectAll,
  selectTotal,
  selectPrice
};
