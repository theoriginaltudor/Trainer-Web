import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.scss']
})
export class DietComponent implements OnInit {
  id: string;
  type = 'Line';
  dietData = {
    calories: [
      ["2019-01-02T23:00:00.000Z", 1000],
    ],
    protein: [
      ["2019-01-02T23:00:00.000Z", 100],
    ],
    fat: [
      ["2019-01-02T23:00:00.000Z", 10]
    ]
  };
  columnNames = {
    calories: ['Time', 'Calories'],
    protein: ['Time', 'Protein'],
    fat: ['Time', 'Fat']
  };
  options = {
    seriesType: 'line'
  };
  width = 600;
  height = 400;

  constructor(private route: ActivatedRoute, private dataAPI: DataProviderService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    this.populateCharts();
  }

  private populateCharts() {
    const id = this.id;
    this.dataAPI.getDietsList(id).subscribe((response) => {
      console.log(response);
      response.data.map(diet => {
        if (diet.date.includes("1999-12-31")) {
          return
        }
        this.dietData.calories.push([diet.date, diet.calories])
        this.dietData.protein.push([diet.date, diet.protein])
        this.dietData.fat.push([diet.date, diet.fat])
      })
    })
  }
}
