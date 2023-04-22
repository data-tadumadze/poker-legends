import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalTravelsComponent } from './final-travels.component';

describe('FinalTravelsComponent', () => {
  let component: FinalTravelsComponent;
  let fixture: ComponentFixture<FinalTravelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalTravelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
