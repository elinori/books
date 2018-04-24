import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';
import {BooksServiceService} from './books-service.service';
import { AppComponent } from './app.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
ReactiveFormsModule,
 HttpClientInMemoryWebApiModule.forRoot(  DataService, { dataEncapsulation: false }),
  ],
  providers: [DataService, BooksServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
