import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/modules/auth/models/auth';

export const loginPage = createAction(
  '[Login Component] Login User',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth Effect] Login User Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Auth Effect] Login User Failure',
  props<{ error: any }>()
);

export const logOut = createAction('[Auth Links Component] Logout User');
