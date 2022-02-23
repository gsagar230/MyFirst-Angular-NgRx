import { createReducer, on } from '@ngrx/store/src/reducer_creator';
import { Book } from '../components/book-list/book';
import { actionRetrieveAllBooks } from './book.actions';

export const initialState: Book[] = [];

export const bookReducer = createReducer(
  initialState,
  on(actionRetrieveAllBooks, (state, action): Book[] => action.books)
);
