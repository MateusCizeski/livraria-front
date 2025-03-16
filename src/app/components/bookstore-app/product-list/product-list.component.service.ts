import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "./product-item/model/book";
// https://localhost:7007/api/v1/livraria/
@Injectable({
    providedIn: 'root'
})

export class BookService{
    private url = 'https://localhost:7007/api/v1/livraria';

    httpOptions = {
        Headers: new HttpHeaders({ 'content-type': 'application/json' })
    }

    constructor(private http:HttpClient) {}

    getBook() {
        return this.http.get(this.url);
    }
}