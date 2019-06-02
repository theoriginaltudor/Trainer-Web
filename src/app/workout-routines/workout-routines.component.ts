import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workout-routines',
  templateUrl: './workout-routines.component.html',
  styleUrls: ['./workout-routines.component.scss']
})
export class WorkoutRoutinesComponent implements OnInit {
  id: string;
  workoutsList: any[];

  constructor(private data: DataProviderService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });

    this.populateList();
  }

  private populateList() {
    this.data.getWorkoutsList(this.id).subscribe((response) => {
      this.workoutsList = response.data;

    })
  }

}
