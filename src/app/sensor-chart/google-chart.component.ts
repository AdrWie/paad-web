import {Directive,ElementRef,Input,OnInit} from '@angular/core';
declare var google:any;
declare var googleLoaded:any;

@Directive({
  selector: '[GoogleChart]'
})

export class GoogleChartComponent implements OnInit {
public _element:any;
@Input('curveType') public curveType:string;
@Input('chartOptions') public chartOptions: Object;
@Input('chartData') public chartData: Object;


constructor(public element: ElementRef) {
  this._element = this.element.nativeElement;
}
 ngOnInit() {
     setTimeout(() =>{
         google.charts.load('current', {'packages':['corechart']});
           setTimeout(() =>{
             this.drawGraph(this.chartOptions,this.curveType,this.chartData,this._element)
           },200);
         },200
       );
 }

 
 drawGraph (chartOptions,curveType,chartData,ele) {
     google.charts.setOnLoadCallback(drawChart);
     function drawChart() {
       var wrapper;
      
       wrapper = new google.visualization.ChartWrapper({
         chartType: curveType,
         dataTable:chartData,
          options:chartOptions || {},
         containerId: ele.id
       });
       wrapper.draw();
     }
   }
  }
