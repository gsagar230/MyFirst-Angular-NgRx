import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book-list/book';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.css'],
})
export class BookCollectionComponent {
  @Input() books: Book[];
  @Output() removeFavourite = new EventEmitter<string>();

  removeFromFavourite(id: string) {
    this.removeFavourite.emit(id);
  }
}
