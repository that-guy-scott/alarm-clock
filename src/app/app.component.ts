import {Component} from '@angular/core';
import {AlarmClockService} from "./alarm-clock.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public service: AlarmClockService) {
    service.startClock();
  }



}
