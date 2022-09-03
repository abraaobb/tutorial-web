import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookComponent} from "./components/book/book.component";
import {BookUpdateComponent} from "./components/book/book-update/book-update.component";
import {BookCreateComponent} from "./components/book/book-create/book-create.component";

const routes: Routes = [
  { path: 'books', component: BookComponent },
  { path: 'books/update/:id', component: BookUpdateComponent },
  { path: 'books/create', component: BookCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
