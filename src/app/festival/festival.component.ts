import { Component } from '@angular/core';

@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.css'],
})
export class FestivalComponent {
  categoryPrizes = [
    [
      'A',
      'ომხრივი ავიაბილეთი',
      'The Festival in Malta-ს მეინ ივენთის ბაი-ინი',
      'Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი',
      'სასტუმრო Golden Tulip Vivaldi hotel',
      '€500 სახარჯი ფული',
    ],
    [
      'B',
      'ომხრივი ავიაბილეთი',
      'The Festival in Malta-ს მეინ ივენთის ბაი-ინი',
      'Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი',
      'სასტუმრო Golden Tulip Vivaldi hotel',
      '€500 სახარჯი ფული',
    ],
  ];

  categoryC = [
    'C',
    'ომხრივი ავიაბილეთი',
    'The Festival in Malta-ს მეინ ივენთის ბაი-ინი',
    'სასტუმრო',
    '€500 სახარჯი ფული',
  ];
  
  icons = [
    '../../assets/icons/final-item-event-icon.png',
    '../../assets/icons/final-item-event-icon.png',
    '../../assets/icons/final-item-hotel-icon.png',
    '../../assets/icons/final-item-ticket-icon.png',
    '../../assets/icons/final-item-money-icon.png',
  ];
}
