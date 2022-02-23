import { createAction, props } from '@ngrx/store/src/action_creator';
import { Book } from '../components/book-list/book';

export const actionRetrieveAllBooks = createAction(
  '[Book/API] Retrieve All Books',
  props<{ books: Book[] }>()
);

export const actionAddToFavourite = createAction(
  '[Book] Add To Favourite',
  props<{ bookId: string }>()
);

export const actionRemoveFromFavourite = createAction(
  '[Favourite] Remove From Favourite',
  props<{ bookId: string }>()
);
