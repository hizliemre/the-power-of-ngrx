import { HttpInterceptorFn, provideHttpClient, withInterceptors } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideSessionEffects, provideSessionState } from '@state/session';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./app/auth/auth.routes'), providers: [provideSessionEffects()] },
]

const router = [
  provideRouter(routes),
]

const interceptors: HttpInterceptorFn[] = [
  (req, next) => {
    req.headers.set('Content-Type', 'application/json');
    return next(req);
  }
]

const http = [
  provideHttpClient(
    withInterceptors(interceptors)
  )
]

const ngrx = [
  provideStore(),
  provideStoreDevtools({
    name: 'The Power of NgRx',
  }),
]

const states = [
  provideSessionState()
];

bootstrapApplication(AppComponent, {
  providers: [
    router,
    http,
    ngrx,
    states
  ]
}).catch(err => console.error(err));
