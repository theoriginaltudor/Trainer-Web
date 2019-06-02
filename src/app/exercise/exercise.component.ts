import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  clientId: string;
  exerciseId: string;

  exerciseData = {
    repetitions: [
      ["2019-01-02T23:00:00.000Z", 1000],
    ],
    kg: [
      ["2019-01-02T23:00:00.000Z", 100],
    ]
  };
  columnNames = {
    repetitions: ['Time', 'Repetitions'],
    kg: ['Time', 'kg']
  };
  options = {
    seriesType: 'line'
  };

  constructor(private route: ActivatedRoute, private data: DataProviderService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.clientId = params.clientId;
      this.exerciseId = params.exerciseId;
    });

    this.populateChart()
  }

  private populateChart() {
    this.data.getClientHistory(this.clientId, this.exerciseId).subscribe((response) => {
      console.log(response);
      response.data.map((entry) => {
        this.exerciseData.repetitions.push([entry.date, entry.repetitions]);
        this.exerciseData.kg.push([entry.date, entry.kg["$numberDecimal"]]);
      })
    })
  }
}
