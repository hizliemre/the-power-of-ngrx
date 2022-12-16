import { provideEffects } from '@ngrx/effects';
import { provideSessionEffects } from '@state/session';
import { LoginPageEffects } from './effects';
import { LoginPageService } from './facade';

export const provideLoginPageState = () => [provideSessionEffects(), provideEffects(LoginPageEffects), LoginPageService];
export * from './facade';
