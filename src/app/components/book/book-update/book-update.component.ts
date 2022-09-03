import {Component, OnInit} from '@angular/core';
import {TutorialService} from "../../../services/tutorial.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../../../models/book";

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss']
})
export class BookUpdateComponent implements OnInit {
  book: Book = new Book();

  constructor(
    private service: TutorialService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.service.getById(id).subscribe((book) => {
      this.book = book;
    })
  }

  editBook() {
    this.service.update(this.book).subscribe({
      next: () => {
        this.cancel();
      }
    })
  }

  cancel() {
    this.router.navigate(['books/'])
  }


}
