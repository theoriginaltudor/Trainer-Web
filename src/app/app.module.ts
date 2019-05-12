import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { AuthService } from "./auth.service";
import { CallbackComponent } from "./callback/callback.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, SideMenuComponent, CallbackComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
