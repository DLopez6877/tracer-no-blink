import { Injectable } from '@angular/core';

import { Game } from '../../models/game';
import { SettingsService } from '../settings-service/settings.service';
import { LocalStorageService } from '../local-storage-service/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(
    private settingsService: SettingsService,
    private localStorageService: LocalStorageService
  ) {}
  currentGame: Game;

  newGame() {
    this.settingsService.settings.subscribe(settings => {
      const game = {
        numberOfTracers: settings.numberOfTracers,
        difficulty: settings.difficulty,
        crosshairType: settings.crosshairType,
        score: 0,
        timeStarted: Date.now()
      }
      this.localStorageService.set('current-game', game);
    });
  }

  gameOver(time: number) {
    const currentGame: Game = this.localStorageService.get('current-game');
    currentGame.score = time;
    let pastGames: Game[] = this.localStorageService.get('game-history');
    if (!pastGames) pastGames = [];
    pastGames.push(currentGame);
    this.localStorageService.set('game-history', pastGames);
  }

  clearCurrentGame(): void {
    this.localStorageService.set('current-game', null);
  }
}
