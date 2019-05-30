import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CallbackComponent } from "./callback/callback.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ClientListComponent } from "./client-list/client-list.component";
import { ClientComponent } from "./client/client.component";
import { DietComponent } from "./diet/diet.component";

const routes: Routes = [
  { path: "callback", component: CallbackComponent },
  { path: "diet/:id", component: DietComponent },
  { path: "home", component: ClientListComponent },
  { path: "client/:id/:email", component: ClientComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
