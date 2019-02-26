import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {
  timer: any;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  endDate = 'Oct 15, 2019 00:01:00';

  constructor() { }

  ngOnInit() {
    this.timer = this.interval();
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  interval() {
    return setInterval(() => {this.countDown(); }, 1000);
  }

  private countDown() {
    const countDownDate = new Date(this.endDate).getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }
}
