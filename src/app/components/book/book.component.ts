import {Component, OnInit} from '@angular/core';
import {Book} from "../../models/book";
import {TutorialService} from "../../services/tutorial.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'publication_date', 'author', 'status', 'actions'];
  dataSource: Array<Book> = new Array();
  book: Book = new Book();

  constructor(private service: TutorialService, private router: Router) {
  }

  ngOnInit(): void {
    this.listBooks();
  }

  listBooks() {
    this.service.getAll().subscribe({
      next: (response) => {
        this.dataSource = response;
      }
    })
  }

  deleteBook(id: number) {
    this.service.delete(id).subscribe({
      next: () => {
        this.book = new Book();
        this.listBooks();
      }
    })
  }

  createBook() {
    this.router.navigate(['books/create']);
  }

}
