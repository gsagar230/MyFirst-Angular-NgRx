import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCollectionComponent } from './components/book-collection/book-collection.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksService } from './components/book-list/books.service';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './state/book.reducer';
import { collectionReducer } from './state/collection.reducer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ books: bookReducer, collection: collectionReducer }),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    BookListComponent,
    BookCollectionComponent,
  ],
  providers: [BooksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
