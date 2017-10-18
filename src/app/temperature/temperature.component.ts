import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {
  temperatures: any[];
  private url = 'http://localhost:8080/api/temperatures';

  constructor(private http: Http) { 
    http.get(this.url)
        .subscribe(response => {
          this.temperatures = response.json();
      });  
  }
  ngOnInit() {
  }

}
