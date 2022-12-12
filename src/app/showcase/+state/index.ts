import { provideEffects } from '@ngrx/effects';
import { ShowcasePageEffects } from './effects';
import { ShowcasePageService } from './facade';

export const provideShowcasePageState = () => [provideEffects(ShowcasePageEffects), ShowcasePageService];
export * from './facade';
