import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  id: string;
  selectedAuthor = {};
  error: string;

  constructor(
    private _httpService: HttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getAuthor();
  }
  getAuthor() {
    console.log("id is:" + this.id);
    let observable = this._httpService.getAuthor(this.id);
    observable.subscribe((data: object) => {
      console.log("Got our data!", data);
      this.selectedAuthor = data;
    });
  }
  onSubmitEditAuthor() {
    console.log(
      `Click event is working with event: ${JSON.stringify(
        this.selectedAuthor
      )}`
    );
    let observable = this._httpService.updateAuthor(
      this.id,
      this.selectedAuthor
    );
    observable.subscribe(updateauthor => {
      console.log("Got our update author!", updateauthor);
      //@ts-ignore
      if (updateauthor.errors) {
        //@ts-ignore
        this.error = updateauthor.errors.name.message;
        console.log("Errors: ", this.error);
      } else {
        console.log("Author is being updated");
        this.selectedAuthor = { name: "" };
        this.router.navigate(["/home"]);
      }
    });
  }
}
