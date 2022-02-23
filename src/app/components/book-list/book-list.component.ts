import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  @Input() books: Book[];
  @Output() eventAddToFavourite = new EventEmitter<string>();

  addToFavourite(id: string) {
    this.eventAddToFavourite.emit(id);
  }
}
