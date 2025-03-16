import { Component } from '@angular/core';
import { NavComponent } from "./components/shared/nav/nav.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { BookstoreAppComponent } from "./components/bookstore-app/bookstore-app.component";

@Component({
  selector: 'app-root',
  imports: [NavComponent, FooterComponent, BookstoreAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'livraria-front';
}
