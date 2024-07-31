import {Component} from '@angular/core';
import {AlarmClockService} from "../alarm-clock.service";

@Component({
  selector: 'app-alarm-form',
  templateUrl: './alarm-form.component.html',
  styleUrls: ['./alarm-form.component.css']
})
export class AlarmFormComponent {

  isFormVisible = false;
  alarmTime: string = '';

  constructor(public service: AlarmClockService) {
  }


  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }

  closeForm() {
    this.isFormVisible = false;
  }

  setAlarm() {
    // Logic to set the alarm
    this.service.setAlarmTime(this.alarmTime);
    console.log('Alarm set for:', this.service.getAlarmTime());
    this.isFormVisible = false;
  }

}
