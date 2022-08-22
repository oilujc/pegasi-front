import { createReducer, on } from '@ngrx/store';
import { Auth } from '../models/auth.model';
import { createUser, logout, createUserSuccess } from './core.actions';

export const initialState: Readonly<Auth> = {
    user: null
};

export const coreReducer = createReducer(
  initialState,
  on(createUser, (state, {user}) => ({ ...state, user: user })),
  on(logout, (state) => ({...state, user: null})),
);