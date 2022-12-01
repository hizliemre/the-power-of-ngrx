import { HttpInterceptorFn, provideHttpClient, withInterceptors } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideSessionEffects, provideSessionState } from '@state/session';
import { ToastrEffects } from '@ui/toastr';
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
  provideStore({}, { metaReducers: [] }),
  provideEffects(ToastrEffects),
  provideStoreDevtools({
    name: 'The Power of NgRx',
  }),
]

const states = [
  provideSessionState()
];

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    router,
    http,
    ngrx,
    states
  ]
}).catch(err => console.error(err));
