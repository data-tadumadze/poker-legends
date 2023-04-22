import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css'],
})
export class StagesComponent {
  @Output() divSelected = new EventEmitter<number>();
  selectedDiv: number = 1;

  selectDiv(divIndex: number) {
    this.selectedDiv = divIndex;
    this.divSelected.emit(this.selectedDiv);
  }
}
