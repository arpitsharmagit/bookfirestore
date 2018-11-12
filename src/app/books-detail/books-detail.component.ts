import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FsService } from '../fs.service';

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.css']
})
export class BooksDetailComponent implements OnInit {

  book = {
    key:null,
    bookId:null,
    bookName:null,
    downloadUrl:null
  };
  constructor(private route: ActivatedRoute, private router: Router, private fs: FsService) { }

  ngOnInit() {
    this.getBookDetails(this.route.snapshot.params['id']);
  }

  getBookDetails(id) {
    this.fs.getBook(id)
      .subscribe(data => {
        console.log(data);
        this.book = data;
      });
  }
  deleteBook(id) {
    this.fs.deleteBooks(id)
      .subscribe(res => {
          this.router.navigate(['/books']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
