import { without } from 'underscore';
import { Component, ViewChild, ViewChildren, QueryList, ComponentFactoryResolver, ViewContainerRef, ComponentFactory } from '@angular/core';

import { GameService } from '../services/game-service/game.service';
import { StopwatchComponent } from '../stopwatch/stopwatch.component';
import { Router } from '@angular/router';
import { TracerComponent } from '../tracer/tracer.component';
import { SettingsService } from '../services/settings-service/settings.service';
import { HeadshotComponent } from '../headshot/headshot.component';
import { Difficulty } from '../models/difficulty.enum';
import { CrosshairType } from '../models/crosshair-type.enum';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.scss']
})
export class GameScreenComponent {
  constructor(
    private _gameService: GameService,
    private _settingsService: SettingsService,
    private _resolver: ComponentFactoryResolver,
    private _router: Router
  ) { }
  
  @ViewChild("hsHost", { read: ViewContainerRef }) container;
  @ViewChildren(TracerComponent) tracerComponents: QueryList<TracerComponent>;
  @ViewChild(StopwatchComponent) stopwatch: StopwatchComponent;

  private _intervals: number[] = [];
  private _tracers: TracerComponent[] = [];
  private _difficulty: Difficulty;
  
  public headshots: HeadshotComponent[] = [];
  public currentHeadshotIndex = -1;
  public adHost: any;
  public gameStarted = false;
  public tracers: number[] = [];
  public crosshairClass: string;


  ngOnInit(): void {
    this._gameService.newGame();
    this._settingsService.settings.subscribe(settings => {
      this._difficulty = settings.difficulty;
      this.crosshairClass = settings.crosshairType.substring(0, 10);
      for (let i = 0; i < settings.numberOfTracers; i++) {
        this.tracers.push(i);
      }
    });
  }

  ngOnDestroy(): void {
    this._intervals.forEach(interval => clearInterval(interval));
    this._gameService.clearCurrentGame();
  }

  startGame(): void {
    this.gameStarted = true;
    this.stopwatch.start();
    this.tracerComponents.forEach(tracer => {
      tracer.blink();
      var interval = setInterval( () => {tracer.blink();}, this._difficulty);
      this._intervals.push(interval);
      this._tracers.push(tracer);
    });
  }

  destroyTracer(tracer: TracerComponent): void {
    this.container.clear(); 
    const factory: ComponentFactory<HeadshotComponent> = this._resolver.resolveComponentFactory(HeadshotComponent);
    this.container.createComponent(factory);
    tracer.tracer.nativeElement.remove();
    this._tracers = without(this._tracers, tracer);
    if (this._tracers.length === 0) this.endGame();
    setTimeout(() => this.container.clear(), 1000);
  }

  endGame(): void {
    const time = this.stopwatch.stop();
    this._gameService.gameOver(time);
    this._router.navigate(['/finish-screen']);
  }
}
