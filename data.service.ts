import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class DataService  implements InMemoryDbService{

  constructor() { }
    createDb() {
    const books = [
      { id: 1,title:'the hunger games', auther: 'Mr. Nice',date:"2016-01-01" },
      { id: 2,title:'harry potter', auther: 'jk.rowling',date:"2000-01-12" },
      { id: 3,title:'the kill a mockingbird', auther: 'harry line',date:"1998-03-01" },
      { id: 4,title:'pride and prejudice', auther: 'jane austen',date:"2015-03-15" },
      { id: 5,title:'twilight', auther: 'stephine meyer',date:"2005-02-17" },
      { id: 6,title:'the book thief', auther: 'markus zusak',date:"2004-04-04" },
      { id: 7,title:'the chronicles of narnia', auther: 'c.s lewis',date:"2008-08-18" },
      { id: 8,title:'amimal farm', auther: 'george orwell',date:"1999-01-01" },
      { id: 9,title:'gone with the wind', auther: 'margaret mitchell',date:"1992-07-01" },
      { id: 10,title:'princess', auther: 'elinor',date:"1989-08-14" }
    ];
    return {books};
  }


}
