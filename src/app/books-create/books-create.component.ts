import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FsService } from "../fs.service";
import {
  FormControl,
  FormGroupDirective,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-books-create",
  templateUrl: "./books-create.component.html",
  styleUrls: ["./books-create.component.css"]
})
export class BooksCreateComponent implements OnInit {
  constructor(
    private router: Router,
    private fs: FsService,
    private formBuilder: FormBuilder
  ) {}

  booksForm: FormGroup;
  bookId: string = "";
  bookName: string = "";
  downloadUrl: string = "";
  ngOnInit() {
    this.booksForm = this.formBuilder.group({
      bookId: [null, Validators.required],
      bookName: [null, Validators.required],
      downloadUrl: [null, Validators.required]
    });
  }
  onFormSubmit(form: NgForm) {
    this.fs.postBooks(form).subscribe(
      res => {
        let id = res["key"];
        this.router.navigate(["/books-create"]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
