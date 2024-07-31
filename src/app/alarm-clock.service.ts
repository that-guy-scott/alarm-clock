import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlarmClockService implements OnDestroy {

  private _alarmTime: string = '';
  private _time = new Date();
  private _isAlarmRinging = false;

  private intervalId: any;
  alarmSoundActive = false;

  constructor() {
    this.startClock();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startClock() {
    this.intervalId = setInterval(() => {
      this.update();
    }, 1000);
  }

  update() {
    this.setTime(new Date());
    this.checkAlarm();
  }

  checkAlarm() {
    if (this.getAlarmTime() === '') {
      return;
    }

    const [alarmHours, alarmMinutes] = this.getAlarmTime().split(':').map(Number);
    const currentHours = this.getTime().getHours();
    const currentMinutes = this.getTime().getMinutes();

    if (alarmHours === currentHours && alarmMinutes === currentMinutes) {
      this.triggerAlarm();
    }
  }

  triggerAlarm() {
    this.setAlarmTime('');
    this.setAlarmRinging(true);
    if (!this.alarmSoundActive) {
      this.playAlarm();
    }
  }

  playAlarm() {
    this.alarmSoundActive = true;
    const alarmSound = document.getElementById('alarmSound') as HTMLAudioElement;
    if (alarmSound) {
      const playSoundLoop = () => {
        if (this.isAlarmRinging()) {
          alarmSound.play().then(() => {
            alarmSound.onended = playSoundLoop; // Replay the sound when it ends
          }).catch(error => {
            console.error('Error playing alarm sound:', error);
          });
        } else {
          this.alarmSoundActive = false;
        }
      };
      playSoundLoop();
    }
  }

  getAlarmTime(): string {
    return this._alarmTime;
  }

  setAlarmTime(value: string) {
    this._alarmTime = value;
  }

  getTime(): Date {
    return this._time;
  }

  setTime(value: Date) {
    this._time = value;
  }

  setAlarmRinging(value: boolean) {
    this._isAlarmRinging = value;
    if (!value) {
      this.stopAlarm();
    }
  }

  isAlarmRinging(): boolean {
    return this._isAlarmRinging;
  }

  stopAlarm() {
    this.alarmSoundActive = false;
    const alarmSound = document.getElementById('alarmSound') as HTMLAudioElement;
    if (alarmSound) {
      alarmSound.pause();
      alarmSound.currentTime = 0; // Reset the sound
    }
  }

  isAlarmSet() {
    return this.getAlarmTime() !== '';
  }
}
