import { Component, OnInit } from "@angular/core";
// import { AuthService } from "../auth.service";
import { ActivatedRoute } from "@angular/router";
import { DataProviderService } from "../data-provider.service";
import { NamePipe } from "./name.pipe";

@Component({
  selector: "app-client-list",
  templateUrl: "./client-list.component.html",
  styleUrls: ["./client-list.component.scss"]
})
export class ClientListComponent implements OnInit {
  clientsList: any;
  name: String;
  query: String;

  constructor(private route: ActivatedRoute, /*private auth: AuthService,*/ private data: DataProviderService) {}

  ngOnInit() {
    // this.setProfile();
    this.route.params.subscribe(params => {
      const trainerId = params.trainerId;
      this.name = params.email;
      this.populateClientsList(trainerId);
    });
  }

  // private setProfile(): void {
  //   if (this.auth.userProfile) {
  //     this.name = this.auth.userProfile.name;
  //     this.getTrainerId();
  //   } else {
  //     this.auth.getProfile((err, profile) => {
  //       this.name = profile.name;
  //       this.getTrainerId();
  //     });
  //   }
  // }

  private populateClientsList(trainerId) {
    this.data.getClientsList(trainerId).subscribe(response => {
      this.clientsList = response.data;
    });
  }
}
