import { AuthApi } from '@api';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { SessionEffects } from './effects';
import { SessionService } from './facade';
import { feature } from './reducers';

export const provideSessionState = () => [provideState(feature), SessionService];
export const provideSessionEffects = () => [provideEffects(SessionEffects), AuthApi];
export * from './facade';
