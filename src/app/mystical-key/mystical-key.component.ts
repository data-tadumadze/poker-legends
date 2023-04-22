import { Component } from '@angular/core';

@Component({
  selector: 'app-mystical-key',
  templateUrl: './mystical-key.component.html',
  styleUrls: ['./mystical-key.component.css'],
})
export class MysticalKeyComponent {
  position = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  ranking = [
    'სპეც. ტურნირი Cashgame Highrollers II ადგილი',
    'სპეც. ტურნირი Cashgame Highrollers III ადგილი',
    'სპეც. ტურნირი Tournament Sharks II ადგილი',
    'სპეც. ტურნირი Tournament Sharks III ადგილი',
    'Holdem Grinders ლიდერბორდის გამარჯვებული',
    'სპეც. ტურნირი Holdem Grinders II ადგილი',
    'The Festival - Road To Malta, III ადგილი',
    'Spin Poker Series ლიდერბორდის გამარჯვებული',
    'ქეშგეიმ საშუალო ლიმიტების ლიდერბორდის გამარჯვებული',
    'ქეშგეიმ დაბალი ლიმიტების ლიდერბორდის გამარჯვებული',
  ];
}
