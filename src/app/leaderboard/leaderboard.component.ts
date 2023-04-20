import { Component } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
})
export class LeaderboardComponent {
  position = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  giftCard = [
    1500, 1200, 1000, 800, 600, 400, 200, 200, 200, 100, 100, 100, 100, 100,
    100, 100, 100, 100,
  ];
}
