import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'sign-in', loadComponent: () => import('./login/login.component') },
];

export default routes;
