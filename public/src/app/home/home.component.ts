import { HttpService } from "../http.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  authors = [];
  constructor(private _httpService: HttpService) {
    this.getAuthors();
  }

  ngOnInit() {}
  getAuthors() {
    let observable = this._httpService.getAuthors();
    observable.subscribe((data: object) => {
      console.log("Got our data!", data);
      this.authors = data["authors"];
    });
  }
  deleteAuthor(id: string) {
    console.log(`Click event is working with event: ${id}`);
    let observable = this._httpService.deleteAuthor(id);
    observable.subscribe(data => {
      console.log("Got author to delete!", data);
    });
    this.getAuthors();
  }
}
