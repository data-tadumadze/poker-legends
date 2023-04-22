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
import { AdditionalInfoComponent } from './additional-info/additional-info.component';
import { TermsComponent } from './terms/terms.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { TournamentScoresComponent } from './tournament-scores/tournament-scores.component';
import { DailyTournamentsComponent } from './daily-tournaments/daily-tournaments.component';
import { FestivalComponent } from './festival/festival.component';
import { FinalTravelsComponent } from './final-travels/final-travels.component';
import { MysticalKeyComponent } from './mystical-key/mystical-key.component';

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
    AdditionalInfoComponent,
    TermsComponent,
    PromotionsComponent,
    TournamentsComponent,
    TournamentScoresComponent,
    DailyTournamentsComponent,
    FestivalComponent,
    FinalTravelsComponent,
    MysticalKeyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
