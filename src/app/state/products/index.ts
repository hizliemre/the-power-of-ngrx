import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { ProductsEffects } from './effects';
import { ProductsService } from './facade';
import { feature } from './reducers';

export const provideProductsState = () => [provideState(feature), provideEffects(ProductsEffects), ProductsService];
export * from './facade';
