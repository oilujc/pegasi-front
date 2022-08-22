import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Auth } from '../models/auth.model';

export const selectCore = createFeatureSelector<Readonly<Auth>>('core');

