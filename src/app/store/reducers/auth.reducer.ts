import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/modules/auth/models/auth';
import * as AuthActions from '../actions/auth.actions';
import { selectAuthState } from '../selectors/auth.selectors';

export const authFeatureKey = 'auth';

export interface State {
  user: User,
  error: any
}

export const initialState: State = {
  user: {
    id: null,
    username: null,
    email: null,
    isadmin: null
  },
  error: null
};


export const reducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
      error: null
    };
  }),
  on(AuthActions.loginFailure, (state, action) => {
    return {
      ...state,
      user: {
        id: null,
        username: null,
        email: null,
        isadmin: null
      },
      error: action.error
    };
  }),
  on(AuthActions.logOut, (state, action) => {
    return {
      ...state,
      user: {
        id: null,
        username: null,
        email: null,
        isadmin: null
      },
      error: null
    };
  }),
);
