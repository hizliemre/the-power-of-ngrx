import { Routes } from '@angular/router';
import { provideProductsState } from '@state/products';
import { provideShowcasePageState } from './+state';

const routes: Routes = [
  { path: '', loadComponent: () => import('./showcase.component'), providers: [provideProductsState(), provideShowcasePageState()] },
];

export default routes;
