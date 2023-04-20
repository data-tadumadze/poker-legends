import { Component } from '@angular/core';

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.component.html',
  styleUrls: ['./prizes.component.css'],
})
export class PrizesComponent {
  arr = [0, 1, 2];
  icons = [
    '../../assets/icons/travel-icon-sm.png',
    '../../assets/icons/ticket-icon-sm.png',
    '../../assets/icons/ticket-icon-sm.png',
  ];
  prizeDescr = [
    'The Festival in Malta-ს საგზური',
    'სპეციალური ტურნირის "Cashgame Sharks" ბილეთი, სადაც გათამაშდება The Festival in Malta-ს საგზური',
    'ტექნიკის მაღაზიის ვაუჩერი',
  ];
}
