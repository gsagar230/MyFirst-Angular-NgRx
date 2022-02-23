import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from './components/book-list/book';
import { BooksService } from './components/book-list/books.service';
import {
  actionAddToFavourite,
  actionRetrieveAllBooks,
  actionRemoveFromFavourite,
} from './state/book.actions';
import {
  featureSelectorBooks,
  getFavouriteBookCollection,
} from './state/book.selector';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  books$: Observable<Book[]> = this.store.select(featureSelectorBooks);
  collection$: Observable<Book[]> = this.store.select(
    getFavouriteBookCollection
  );

  constructor(private bookService: BooksService, private store: Store) {}

  ngOnInit(): void {
    this.bookService
      .getAllBooks()
      .subscribe((books) =>
        this.store.dispatch(actionRetrieveAllBooks({ books }))
      );
  }

  addToFavourite(bookId: string) {
    this.store.dispatch(actionAddToFavourite({ bookId }));
  }

  removeFromFavourite(bookId: string) {
    this.store.dispatch(actionRemoveFromFavourite({ bookId }));
  }
}
