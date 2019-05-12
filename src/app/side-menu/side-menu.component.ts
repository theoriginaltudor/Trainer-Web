import { Component, OnInit } from "@angular/core";
import { DataProviderService } from "../data-provider.service";

@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styleUrls: ["./side-menu.component.scss"]
})
export class SideMenuComponent implements OnInit {
  message: string;
  error: string;

  constructor(private data: DataProviderService) {}

  ngOnInit() {
    this.data.securedPing().subscribe(data => {
      console.log(data);
      this.message = data.message;
    });
  }
}
