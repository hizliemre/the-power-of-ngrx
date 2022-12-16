import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { CartEffects } from './effects';
import { CartService } from './facade';
import { feature } from './reducers';

export const proviceCardState = () => [provideState(feature), provideEffects(CartEffects), CartService];
export * from './facade';
