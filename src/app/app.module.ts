import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthService } from "./auth.service";
import { CallbackComponent } from "./callback/callback.component";
import { HttpClientModule } from "@angular/common/http";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ClientListComponent } from "./client-list/client-list.component";
import { ClientComponent } from "./client/client.component";
import { DietComponent } from './diet/diet.component';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    NotFoundComponent,
    ClientListComponent,
    ClientComponent,
    DietComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, GoogleChartsModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
