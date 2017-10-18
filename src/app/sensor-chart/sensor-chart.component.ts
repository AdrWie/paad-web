import { Component, OnInit } from '@angular/core';
import { GoogleChartComponent } from './google-chart.component';


@Component({
  selector: 'sensor-chart',
  templateUrl: './sensor-chart.component.html',
  styleUrls: ['./sensor-chart.component.css']
})
export class SensorChartComponent implements OnInit {

  public pie_ChartData = [
    ['Time', 'Temperature'],
    ['2017-11-01', 33],
    ['2017-11-02', 31],
    ['2017-11-02', 34],
    ['2017-11-05', 34],
    ['2017-11-04', 30] 
  ];

   public pie_ChartOptions  = {
     title: 'Measured sensor data',
     width: 900,
     height: 500,
     legend: { position: 'bottom'}
   };

  constructor() { 
    
  }
    ngOnInit() {
  }

}
