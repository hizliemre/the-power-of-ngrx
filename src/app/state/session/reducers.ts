import { User } from '@models';
import { createFeature, createReducer, on } from '@ngrx/store';
import { loginActions } from './actions';

interface SessionState {
  loading: boolean;
  loaded: boolean;
  user: User | null;
}

const initialState: SessionState = {
  loading: false,
  loaded: false,
  user: null,
};

const reducer = createReducer(initialState,
  on(loginActions.login, (state) => {
    return { ...state, user: null, loading: true, loaded: false };
  }),
  on(loginActions.loginSuccess, (state, { user }) => {
    return { ...state, user, loading: false, loaded: true };
  }),
  on(loginActions.loginFailure, (state) => {
    return { ...state, user: null, loading: false, loaded: false };
  }),
)

export const feature = createFeature({
  name: 'session',
  reducer,
});
