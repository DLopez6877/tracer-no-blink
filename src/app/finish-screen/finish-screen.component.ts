import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { LocalStorageService } from '../services/local-storage-service/local-storage.service';
import { CrosshairType } from '../models/crosshair-type.enum';
import { Difficulty } from '../models/difficulty.enum';

@Component({
  selector: 'app-finish-screen',
  templateUrl: './finish-screen.component.html',
  styleUrls: ['./finish-screen.component.scss']
})
export class FinishScreenComponent implements OnInit {
  constructor(
    private _localStorageService: LocalStorageService
  ) { }

  public gameScore: number;
  public gameHistory: Game[];
  public topScore: number;

  ngOnInit(): void {
    const unsortedGameHistory = this._localStorageService.get("game-history");
    this.gameHistory = unsortedGameHistory.sort((a,b) => (a.startTime > b.startTime) ? 1 : ((b.startTime > a.startTime) ? -1 : 0)).reverse();
    this.topScore = Math.min.apply(Math, this.gameHistory.map(function(o) { return o.score; }))
    this.gameScore = this.gameHistory[0].score;
  }

  translateSpeedToDifficulty(value: string): string {
    for (const key in Difficulty) {
      if (value === Difficulty[key]) {
        return key.toLowerCase();
      }
    }
  }

  translateCrosshairTypeValueToKey(value: string): string {
    for (const key in CrosshairType) {
      if (value === CrosshairType[key]) {
        return key.toLowerCase();
      }
    }
  }

  clearHistory(): void {
    this.gameHistory = [this.gameHistory[0]];
    this._localStorageService.set("game-history", this.gameHistory);
  }

  toHHMMSS(seconds: number): string {
    const time = new Date(seconds);
    return time.toISOString().substr(14, 9);
  }
}
