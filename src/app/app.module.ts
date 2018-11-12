import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from "./app.component";
import { BooksComponent } from "./books/books.component";
import { BooksDetailComponent } from "./books-detail/books-detail.component";
import { BooksCreateComponent } from "./books-create/books-create.component";
import { BooksEditComponent } from "./books-edit/books-edit.component";
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule
} from "@angular/material";

import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  {
    path: "books",
    component: BooksComponent,
    data: { title: "Books List" }
  },
  {
    path: "books-details/:id",
    component: BooksDetailComponent,
    data: { title: "Books Details" }
  },
  {
    path: "books-create",
    component: BooksCreateComponent,
    data: { title: "Create Books" }
  },
  {
    path: "books-edit/:id",
    component: BooksEditComponent,
    data: { title: "Edit Books" }
  },
  { path: "", redirectTo: "/books", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BooksDetailComponent,
    BooksCreateComponent,
    BooksEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,    
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
