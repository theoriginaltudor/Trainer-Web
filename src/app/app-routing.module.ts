import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CallbackComponent } from "./callback/callback.component";
import { SideMenuComponent } from "./side-menu/side-menu.component";

const routes: Routes = [
  { path: "callback", component: CallbackComponent },
  { path: "home", component: SideMenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
