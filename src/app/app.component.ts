import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "Trainer-Web";
  email: String;

  constructor(public router: Router, /*private auth: AuthService*/) {
    // auth.handleAuthentication();
  }

  ngOnInit() {
    // if (this.auth.isAuthenticated()) {
    //   this.auth.renewTokens();
    // }
  }

  // login() {
  //   this.router.navigate(["/home"]);
  // }
}
