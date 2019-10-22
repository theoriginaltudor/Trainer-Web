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
  type = 'LineChart';
  dietData = {
    calories: [
      [new Date(), 1000],
    ],
    protein: [
      [new Date(), 100],
    ],
    fat: [
      [new Date(), 10]
    ]
  };
  columnNames = {
    calories: ['Time', 'Calories'],
    protein: ['Time', 'Protein'],
    fat: ['Time', 'Fat']
  };
  // options = {
  //   seriesType: 'line'
  // };
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
      // console.log(response);
      response.data.map((diet, index) => {
        if (diet.date.includes("1999-12-31")) {
          return
        }
        if (index == 0) {
          this.dietData.calories[0] = [new Date(diet.date), diet.calories];  
          this.dietData.protein[0] = [new Date(diet.date), diet.protein];  
          this.dietData.fat[0] = [new Date(diet.date), diet.fat];  
        } else {
          this.dietData.calories.push([new Date(diet.date), diet.calories])
          this.dietData.protein.push([new Date(diet.date), diet.protein])
          this.dietData.fat.push([new Date(diet.date), diet.fat])
        }
      })
      console.log(this.dietData);
      
    })
  }
}
