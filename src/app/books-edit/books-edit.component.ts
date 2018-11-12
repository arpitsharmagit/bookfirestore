import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FsService } from '../fs.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.css']
})
export class BooksEditComponent implements OnInit {

  booksForm: FormGroup;
id:string = '';
bookId:string = '';
bookName:string = '';
downloadUrl:string = '';

  constructor(private router: Router, private route: ActivatedRoute, private fs: FsService, private formBuilder: FormBuilder) { }

  
  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);
  this.booksForm = this.formBuilder.group({
    'bookId' : [null, Validators.required],
    'bookName' : [null, Validators.required],
    'downloadUrl' : [null, Validators.required]
  });
  }
  getBook(id) {
    this.fs.getBook(id).subscribe(data => {
      this.id = data.key;
      this.booksForm.setValue({
        bookId: data.bookId,
        bookName: data.bookName,
        downloadUrl: data.downloadUrl
      });
    });
  }
  onFormSubmit(form:NgForm) {
    this.fs.updateBooks(this.id, form)
      .subscribe(res => {
          this.router.navigate(['/books']);
        }, (err) => {
          console.log(err);
        }
      );
  }
  booksDetails() {
    this.router.navigate(['/books-details', this.id]);
  }

}
