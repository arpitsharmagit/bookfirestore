import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

@Injectable({
  providedIn: 'root'
})
export class FsService {
  ref = firebase.firestore().collection('books');
  constructor() { }

  getBooks(): Observable<any> {
    return new Observable((observer) => {
      this.ref.orderBy('bookId').onSnapshot((querySnapshot) => {
        let books = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          books.push({
            key: doc.id,
            bookId: data.bookId,
            bookName: data.bookName,
            downloadUrl: data.downloadUrl
          });
        });
        console.log(`Total Books => ${books.length}`);
        observer.next(books);
      });
    });
  }
  
  getBook(id: string): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).get().then((doc) => {
        let data = doc.data();
        observer.next({
          key: doc.id,
            bookId: data.bookId,
            bookName: data.bookName,
            downloadUrl: data.downloadUrl
        });
      });
    });
  }
  
  postBooks(data): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(data.bookId).set(data);
        observer.next({
          key: data.bookId,
        });      
    });
  }
  
  updateBooks(id: string, data): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).set(data).then(() => {
        observer.next();
      });
    });
  }
  
  deleteBooks(id: string): Observable<{}> {
    return new Observable((observer) => {
      this.ref.doc(id).delete().then(() => {
        observer.next();
      });
    });
  }
  
}
