import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { StagesComponent } from './stages/stages.component';
import { RankingComponent } from './ranking/ranking.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PrizesComponent } from './prizes/prizes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ContentContainerComponent,
    StagesComponent,
    RankingComponent,
    LeaderboardComponent,
    PrizesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
