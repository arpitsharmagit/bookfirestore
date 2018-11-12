import { Component, OnInit } from "@angular/core";
import { DataSource } from "@angular/cdk/collections";
import { FsService } from "../fs.service";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"]
})
export class BooksComponent implements OnInit {
  displayedColumns = ["key","bookId", "bookName", "downloadUrl"];
  dataSource = new BooksDataSource(this.fs);

  constructor(private fs: FsService) {}

  ngOnInit() {}
}
export class BooksDataSource extends DataSource<any> {

  constructor(private fs: FsService) {
    super()
  }

  connect() {
    return this.fs.getBooks();
  }

  disconnect() {

  }
}
