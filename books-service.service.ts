import { Injectable } from '@angular/core';
import {Observable} from 'Rxjs/Observable';
import { DataService } from './data.service';
import { of }   from 'rxjs/observable/of';

@Injectable()
export class BooksServiceService {
books:any[]
  constructor( private data:DataService) { }

  //get all books from the data model 
  getBooks(): Observable<any[]> {
  this.books=this.data.createDb().books;
  return of(this.books);


}
}