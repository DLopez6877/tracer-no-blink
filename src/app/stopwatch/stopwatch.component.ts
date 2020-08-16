import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
})
export class StopwatchComponent implements OnInit {
  @Output() onStop = new EventEmitter();
  @Output() onStart = new EventEmitter();

  constructor() {}

  private _intervalRef: number;
  public time: number;
  
  ngOnInit(): void {}


  start(): void {
    const startTime = Date.now() - (this.time || 0);
    this._intervalRef = setInterval(() => {
      this.time = Date.now() - startTime;
    });
    this.onStart.emit();
  }

  stop(): number {
    clearInterval(this._intervalRef);
    this.onStop.emit(this.time);
    return this.time;
  }
}
