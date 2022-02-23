import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from './book';

@Injectable()
export class BooksService {
  baseUrl: string =
    'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks';
  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.http
      .get<{ items: Book[] }>(this.baseUrl)
      .pipe(map((books) => books.items));
  }
}
