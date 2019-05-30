import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"]
})
export class ClientComponent implements OnInit {
  email: String;
  id: String;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.email = params.email;
    });
  }
}
