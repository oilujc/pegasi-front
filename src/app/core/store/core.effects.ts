import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap, tap } from 'rxjs/operators';
import { UserResponse } from '../models/auth.model';

import { AuthService } from '../services/auth.service';
import { createUser, createUserSuccess, logout } from './core.actions';

@Injectable()
export class CoreEffects {

  createUser$ = createEffect(() => this.actions$.pipe(
    ofType(createUser),
    exhaustMap(action =>
      this.authService
        .createUser(action.user).pipe(
          map((data: any) => {
            return createUserSuccess({ data: data?.data });
          }),
          tap(() => {
            this.router.navigate(['/dashboard']);
          }),
          catchError(error => EMPTY))
    )
  )
  );

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(logout),
    tap(() => {
      this.router.navigate(['/signin']);
    })
  ), { dispatch: false });


  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) { }
}