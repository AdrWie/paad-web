import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.css']
})
export class TimestampComponent implements OnInit {
  timestamps: any[];
  private url = 'http://localhost:8080/api/timestamps';

  constructor(private http: Http) {
    http.get(this.url)
        .subscribe(response => {
          this.timestamps = response.json();
      })
   }

  ngOnInit() {
  }

}
