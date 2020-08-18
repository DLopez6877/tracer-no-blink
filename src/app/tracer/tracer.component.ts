import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tracer',
  templateUrl: './tracer.component.html',
  styleUrls: ['./tracer.component.scss']
})
export class TracerComponent {
  constructor() { }
  
  @Output() onHit = new EventEmitter();
  @Output() onHeadshot = new EventEmitter();
  
  @ViewChild('tracer') tracer: ElementRef;

  blink(): void {
    const tracerSize = 65;
    const xVal = Math.floor(Math.random() * (document.body.clientWidth - tracerSize)) + 1;
    const yVal = Math.floor(Math.random() * (document.body.clientHeight - tracerSize)) + 1
    this.tracer.nativeElement.style.setProperty('--x', xVal + 'px');
    this.tracer.nativeElement.style.setProperty('--y', yVal + 'px');
  }

  hit() {
    this.onHit.emit();
  }

  headshot() {
    this.onHeadshot.emit();
  }
}
