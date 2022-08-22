import { createAction, props } from '@ngrx/store';
import { User, UserResponse } from '../models/auth.model';

export const createUser = createAction('[Auth Component] Signin',
    props<{ user: Readonly<User> }>());

export const createUserSuccess = createAction('[Auth Component] Signin Success',
    props<{ data: Readonly<UserResponse> }>());
    
export const logout = createAction('[Auth Component] Logout');
