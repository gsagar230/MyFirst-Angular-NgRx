import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store/src/selector';
import { Book } from '../components/book-list/book';

export const featureSelectorBooks = createFeatureSelector<Book[]>('books');

const featureSelectorCollection = createFeatureSelector<string[]>('collection');

export const getFavouriteBookCollection = createSelector(
  featureSelectorBooks,
  featureSelectorCollection,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id));
  }
);
