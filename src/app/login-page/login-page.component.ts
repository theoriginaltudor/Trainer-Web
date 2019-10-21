import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPage implements OnInit {
  email: String;
  trainerId: String;

  constructor(private data: DataProviderService) { }

  ngOnInit() {
  }

  private getTrainerId(): void {
    if (this.email != null && this.email != "") {
      this.data.getTrainer(this.email).subscribe(response => {
        if(response.data.length != 0) {
          this.trainerId = response.data[0]._id;
        }
      });
    }
  }
}
