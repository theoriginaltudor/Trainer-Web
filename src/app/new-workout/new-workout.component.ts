import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-workout',
  templateUrl: './new-workout.component.html',
  styleUrls: ['./new-workout.component.scss']
})
export class NewWorkoutComponent implements OnInit {
  id: string;
  exerciseList = [];
  exerciseNames = [];
  recomendationsList = [];
  allExercises: any[];
  adding: boolean;
  name: string;

  constructor(private data: DataProviderService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });

    this.populateList();
  }

  private changeState() {
    this.adding = !this.adding;
  }

  private saveWorkout() {
    const workout = {
      clientId: this.id,
      name: this.name,
      exerciseList: this.exerciseList,
      recomendationsList: this.recomendationsList
    }
    this.data.addNewWorkout(workout).subscribe((response) => {
      if (response.success) {
        //navigate to previous screen
        console.log('success');

      }
    });
  }

  private populateList() {
    this.data.getExercisesList().subscribe((response) => {
      this.allExercises = response.data;
    })
  }

  private addToWorkout(exercise) {
    this.exerciseList.push(exercise._id)
    this.exerciseNames.push(exercise.name)
    const index = this.allExercises.indexOf(exercise);
    this.allExercises.splice(index, 1);
  }
}
