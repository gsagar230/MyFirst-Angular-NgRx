import { createReducer, on } from '@ngrx/store/src/reducer_creator';
import {
  actionAddToFavourite,
  actionRemoveFromFavourite,
} from './book.actions';

export const initialState: string[] = [];

export const collectionReducer = createReducer(
  initialState,
  on(actionAddToFavourite, (state, action) => {
    if (state.indexOf(action.bookId) > -1) return state;
    return [...state, action.bookId];
  }),
  on(actionRemoveFromFavourite, (state, action): string[] => {
    return state.filter((id) => id !== action.bookId);
  })
);
