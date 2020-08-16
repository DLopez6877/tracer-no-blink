import { Component, OnInit, ViewChild } from '@angular/core';
import { ControlPanelComponent } from '../control-panel/control-panel.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {
  constructor(
    private _router: Router
  ) { }
  @ViewChild(ControlPanelComponent) controlPanel: ControlPanelComponent;
  private _interval: number;

  public settingUpGame = false;
  public setupProgress = 0;

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    clearInterval(this._interval);
  }

  startGame(): void {
    this.settingUpGame = true;
    this.controlPanel.saveSettings();
    this._interval = setInterval(() => {
      if (this.setupProgress < 100) {
        this.setupProgress += Math.random() * 20;
      } else {
        this._router.navigate(['/game-screen']);
      }
    }, 100);
  }
}
