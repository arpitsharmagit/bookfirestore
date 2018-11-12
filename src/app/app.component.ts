import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};
const config = {
  apiKey: "AIzaSyAqGSFdb6OSbGq9Z8fbYntXLQzoeX-lN9Q",
  authDomain: "books-1cab6.firebaseapp.com",
  databaseURL: "https://books-1cab6.firebaseio.com",
  projectId: "books-1cab6",
  storageBucket: "books-1cab6.appspot.com",
  messagingSenderId: "5490793951"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    firebase.initializeApp(config);
    firebase.firestore().settings(settings);
  }
  title = 'bookservice-ng6';

}
