import { Routes } from '@angular/router';
import { provideLoginPageState } from './login/+state';

const routes: Routes = [
  { path: 'sign-in', loadComponent: () => import('./login/login.component'), providers: [provideLoginPageState()] },
];

export default routes;
