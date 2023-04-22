import { Component } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css'],
})
export class TermsComponent {
  clickedFirst: boolean = false;
  clickedSecond: boolean = false;
  clickedThird: boolean = false;

  clickFirst() {
    if (this.clickedFirst === false) {
      this.clickedFirst = true;
      this.clickedSecond = false;
      this.clickedThird = false;
    } else {
      this.clickedFirst = false;
      this.clickedSecond = false;
      this.clickedThird = false;
    }
  }
  clickSecond() {
    if (this.clickedSecond === false) {
      this.clickedFirst = false;
      this.clickedSecond = true;
      this.clickedThird = false;
    } else {
      this.clickedFirst = false;
      this.clickedSecond = false;
      this.clickedThird = false;
    }
  }
  clickThird() {
    if (this.clickedThird === false) {
      this.clickedFirst = false;
      this.clickedSecond = false;
      this.clickedThird = true;
    } else {
      this.clickedFirst = false;
      this.clickedSecond = false;
      this.clickedThird = false;
    }
  }
}
