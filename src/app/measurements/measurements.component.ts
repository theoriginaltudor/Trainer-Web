import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent implements OnInit {
  id: string;
  entriesList = [];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "nextArrow": "<div >Next</div>",
    "prevArrow": "<div >Prev</div>",
    "dots": true,
    "infinite": false
  };

  constructor(private data: DataProviderService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    this.getData();
  }

  private getData() {
    const { id } = this;
    this.data.getMeasurementsList(id).subscribe((response) => {
      response.data.map(entry => {
        const newEntry = { ...entry, keys: Object.keys(entry) }
        this.entriesList.push(newEntry)
      });
    })
  }
}
