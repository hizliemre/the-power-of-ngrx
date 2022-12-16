import { HttpInterceptorFn, provideHttpClient, withInterceptors } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { proviceCardState } from '@state/cart';
import { provideSessionState } from '@state/session';
import { ToastrEffects } from '@ui/toastr';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'showcase' },
  { path: 'showcase', loadChildren: () => import('./app/showcase/showcase-routes') },
  { path: 'auth', loadChildren: () => import('./app/auth/auth.routes') },
]

const interceptors: HttpInterceptorFn[] = [
  (req, next) => {
    req.headers.set('Content-Type', 'application/json');
    return next(req);
  }
]

const ngrx = [
  provideStore({}, { metaReducers: [] }),
  provideEffects(ToastrEffects),
  provideStoreDevtools({
    name: 'The Power of NgRx',
  }),
  provideSessionState()
]

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors(interceptors)
    ),
    proviceCardState(),
    ngrx,
  ]
}).catch(err => console.error(err));
