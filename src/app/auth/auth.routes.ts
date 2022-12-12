import { Routes } from '@angular/router';
import { provideSessionEffects } from '@state/session';

const routes: Routes = [
  { path: 'sign-in', loadComponent: () => import('./login/login.component'), providers: [provideSessionEffects()] },
];

export default routes;
