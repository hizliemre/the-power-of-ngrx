import { adapter, feature } from './reducers';


const { selectAll } = adapter.getSelectors(feature.selectProductsState);

const { name, reducer, selectProductsState, ...featureSelectors } = feature

export const productsSelectors = {
  ...featureSelectors,
  selectAll,
};
