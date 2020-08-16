import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { FinishScreenComponent } from './finish-screen/finish-screen.component';

const routes: Routes = [
  {
    path: "",
    component: StartScreenComponent
  },
  {
    path: "game-screen",
    component: GameScreenComponent
  },
  {
    path: "finish-screen",
    component: FinishScreenComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
