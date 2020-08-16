import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  constructor() { }
  @Output() onCountdownComplete = new EventEmitter();

  private _interval: number;

  public time = 3;

  ngOnInit(): void {
    this.start()
  }

  start(): void {
    this._interval = setInterval(() => {
      if (this.time > 1) {
        --this.time;
      } else {
        this.stop();
      }
    }, 1000);
  }

  stop():void {
    this.time = null;
    clearInterval(this._interval);
    this.onCountdownComplete.emit();
  }
}
