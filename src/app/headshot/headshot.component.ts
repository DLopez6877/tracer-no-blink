import { Component, OnInit } from '@angular/core';
import { style, trigger, state, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-headshot',
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({opacity: 0})),
      transition(':enter', animate( '.75s', keyframes([
        style({opacity: 1}),
        style({opacity: 0})
      ]))),
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ],
  templateUrl: './headshot.component.html',
  styleUrls: ['./headshot.component.scss']
})
export class HeadshotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
