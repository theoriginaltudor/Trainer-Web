import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { ActivatedRoute } from "@angular/router";
import { DataProviderService } from "../data-provider.service";

@Component({
  selector: "app-client-list",
  templateUrl: "./client-list.component.html",
  styleUrls: ["./client-list.component.scss"]
})
export class ClientListComponent implements OnInit {
  name: string;
  clientsList: any;

  constructor(private route: ActivatedRoute, /*private auth: AuthService,*/ private data: DataProviderService) {}

  ngOnInit() {
    // this.setProfile();
    this.route.params.subscribe(params => {
      this.name = params.email;
      this.getTrainerId();
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
  private getTrainerId(): void {
    const email = this.name;
    this.data.getTrainer(email).subscribe(response => {
      const trainerId = response.data[0]._id;
      this.populateClientsList(trainerId);
    });
  }

  private populateClientsList(trainerId) {
    this.data.getClientsList(trainerId).subscribe(response => {
      this.clientsList = response.data;
    });
  }
}
