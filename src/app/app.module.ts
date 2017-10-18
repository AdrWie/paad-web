import { GoogleChartComponent } from './sensor-chart/google-chart.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SensorChartComponent } from './sensor-chart/sensor-chart.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TimestampComponent } from './timestamp/timestamp.component';

@NgModule({
  declarations: [
    AppComponent,
    SensorChartComponent,
    GoogleChartComponent,
    TemperatureComponent,
    TimestampComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
