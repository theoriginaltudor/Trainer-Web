import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { GoogleChartsModule } from 'angular-google-charts';
import { HttpClientModule } from "@angular/common/http";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthService } from "./auth.service";
import { CallbackComponent } from "./callback/callback.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ClientListComponent } from "./client-list/client-list.component";
import { ClientComponent } from "./client/client.component";
import { DietComponent } from './diet/diet.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { WorkoutHistoryComponent } from './workout-history/workout-history.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { WorkoutRoutinesComponent } from './workout-routines/workout-routines.component';
import { WorkoutCellComponent } from './workout-cell/workout-cell.component';
import { NewWorkoutComponent } from './new-workout/new-workout.component';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    NotFoundComponent,
    ClientListComponent,
    ClientComponent,
    DietComponent,
    MeasurementsComponent,
    WorkoutHistoryComponent,
    ExerciseComponent,
    WorkoutRoutinesComponent,
    WorkoutCellComponent,
    NewWorkoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    SlickCarouselModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
