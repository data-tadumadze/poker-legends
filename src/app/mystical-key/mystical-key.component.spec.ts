import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysticalKeyComponent } from './mystical-key.component';

describe('MysticalKeyComponent', () => {
  let component: MysticalKeyComponent;
  let fixture: ComponentFixture<MysticalKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysticalKeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MysticalKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
