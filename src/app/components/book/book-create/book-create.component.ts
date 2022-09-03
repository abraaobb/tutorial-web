import {Component, OnInit} from '@angular/core';
import {Book} from "../../../models/book";
import {TutorialService} from "../../../services/tutorial.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {
  book: Book = new Book();

  constructor(private service: TutorialService, private router: Router) {
  }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['books/'])
  }

  createBook() {
    this.service.create(this.book).subscribe({
      next: () => {
        this.book = new Book();
        this.cancel();
      }
    })
  }

}
