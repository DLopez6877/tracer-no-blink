import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameSettings } from '../../models/game-settings';
import APP_SETTINGS from 'src/app/app_settings';
import { LocalStorageService } from '../local-storage-service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor(
    private _localStorageService: LocalStorageService
  ) { }
  
  private _settings = this.getSettings();

  public settings = this._settings.asObservable();

  updateSettings(newSettings: GameSettings): void {
    this._localStorageService.set('settings', newSettings);
    this._settings.next(newSettings);
  }

  private getSettings(): BehaviorSubject<GameSettings> {
    const savedSettings:GameSettings = this._localStorageService.get('settings');
    return new BehaviorSubject<GameSettings>({
      numberOfTracers: savedSettings?.numberOfTracers ?? APP_SETTINGS.defaults.numberOfTracers,
      difficulty: savedSettings?.difficulty ?? APP_SETTINGS.defaults.difficulty,
      crosshairType: savedSettings?.crosshairType ?? APP_SETTINGS.defaults.crosshairType
    });
  }
  
}
