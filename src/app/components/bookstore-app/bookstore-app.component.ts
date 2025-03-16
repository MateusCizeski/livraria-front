import { Component } from '@angular/core';
import { FiltersComponent } from "./filters/filters.component";
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
  selector: 'app-bookstore-app',
  imports: [FiltersComponent, ProductListComponent],
  templateUrl: './bookstore-app.component.html',
  styleUrl: './bookstore-app.component.css'
})
export class BookstoreAppComponent {

}
