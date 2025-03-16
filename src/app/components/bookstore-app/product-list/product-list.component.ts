import { Component, OnInit } from '@angular/core';
import { BookService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  providers: [BookService],
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  livros : any;
  bookService : BookService;

  constructor(bookService : BookService) {
    this.bookService = bookService
  }

  ngOnInit(): void {
    this.livros = this.bookService.getBook().subscribe((data) => {
      this.livros = data;
      console.log(this.livros);
    });
  }
}
