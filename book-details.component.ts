import { Component, OnInit } from '@angular/core';
import { BooksServiceService } from './../books-service.service';

import {Book} from './../Book';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
books: Book[];
setClickedRow: any;
popUp: any;
selectedRow: any;
isInvalid: boolean;
isSucsees: boolean;
title: string;
auther: string;
date: Date;


  constructor( private service: BooksServiceService) {  

    //get data + selected row
    
   service.getBooks().subscribe(books=>this.books = books);
        this.setClickedRow = function(index, book){
        this.selectedRow = index;
            
            }
  }


//  add a book  to the table
  addBook(title,auther,date)
  {

      if(title==undefined||auther==undefined||date==undefined)
      {
        this.isInvalid=true;
        
      }
      else
      {
      this.books.push({title:title,auther:auther,date:date});
         this.isSucsees=true;
         this.isInvalid=false;
                                 
      }

  }
//delete book
  delete(i)
  {
   this.books.splice(i,1);
  }

 clear(){
   
 this.auther="";
 this.date=null;
 this.title="";
 this.isSucsees=false;
 this.isInvalid=false;

  }

//save data after edit
  saveBook(book)
  {
    this.popUp=book;
     this.selectedRow=-1;
  
  }

  ngOnInit() {
    
  }
 
 
}



