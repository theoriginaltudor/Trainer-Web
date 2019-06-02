import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CallbackComponent } from "./callback/callback.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ClientListComponent } from "./client-list/client-list.component";
import { ClientComponent } from "./client/client.component";
import { DietComponent } from "./diet/diet.component";
import { MeasurementsComponent } from './measurements/measurements.component';
import { WorkoutHistoryComponent } from './workout-history/workout-history.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { WorkoutRoutinesComponent } from './workout-routines/workout-routines.component';
import { NewWorkoutComponent } from './new-workout/new-workout.component';

const routes: Routes = [
  { path: "callback", component: CallbackComponent },
  { path: "new-workout/:id", component: NewWorkoutComponent },
  { path: "diet/:id", component: DietComponent },
  { path: "measurements/:id", component: MeasurementsComponent },
  { path: "workout-history/:id", component: WorkoutHistoryComponent },
  { path: "exercise-history/:clientId/:exerciseId", component: ExerciseComponent },
  { path: "workout-routines/:id", component: WorkoutRoutinesComponent },
  { path: "home", component: ClientListComponent },
  { path: "client/:id/:email", component: ClientComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
