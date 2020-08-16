import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { FinishScreenComponent } from './finish-screen/finish-screen.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { TracerComponent } from './tracer/tracer.component';
import { GameService } from './services/game-service/game.service';
import { SettingsService } from './services/settings-service/settings.service';
import { LocalStorageService } from './services/local-storage-service/local-storage.service';
import { HeadshotComponent } from './headshot/headshot.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { CountdownComponent } from './countdown/countdown.component';

@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    GameScreenComponent,
    FinishScreenComponent,
    StopwatchComponent,
    TracerComponent,
    HeadshotComponent,
    ControlPanelComponent,
    CountdownComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    GameService,
    SettingsService,
    LocalStorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
