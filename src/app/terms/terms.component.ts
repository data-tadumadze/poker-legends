import { Component } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css'],
})
export class TermsComponent {
  questions = [
    'როდის იწყება და რა ფორმატით გაიმართება აქცია',
    'როგორ მივიღო აქციაში მონაწილეობა',
    'სხვადასხვა',
  ];
}
