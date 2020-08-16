import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings-service/settings.service';
import { CrosshairType } from '../models/crosshair-type.enum';
import { Difficulty } from '../models/difficulty.enum';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {
  constructor(
    private _settingsService: SettingsService
  ) {}

  public numberOfTracers: number;
  public difficulty: Difficulty;
  public crosshairType: CrosshairType;

  ngOnInit(): void {
    this._settingsService.settings.subscribe(settings => {
      this.numberOfTracers = settings.numberOfTracers;
      this.difficulty = settings.difficulty;
      this.crosshairType = settings.crosshairType;
    })
  }

  saveSettings(): void {
    const newSettings = {
      numberOfTracers: this.numberOfTracers,
      difficulty: this.difficulty,
      crosshairType: this.crosshairType
    };
    this._settingsService.updateSettings(newSettings);
  }

  setNumberOfTracers(amount: number): void {

    this.numberOfTracers = amount;
  }

  setDifficulty(difficulty: string): void {
    this.difficulty = Difficulty[difficulty.toUpperCase()];
  }
    
  setCrosshairType(type: string): void {
    this.crosshairType = CrosshairType[type];
  }
}
