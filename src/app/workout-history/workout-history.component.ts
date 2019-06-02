import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workout-history',
  templateUrl: './workout-history.component.html',
  styleUrls: ['./workout-history.component.scss']
})
export class WorkoutHistoryComponent implements OnInit {
  id: string;
  exercisesList: any[];

  constructor(private data: DataProviderService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });

    this.populateList();
  }

  private populateList() {
    this.data.getExercisesList().subscribe((response) => {
      this.exercisesList = response.data;
    })
  }

}
