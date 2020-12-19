import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGuessComponent } from './add-guess.component';

describe('AddGuessComponent', () => {
  let component: AddGuessComponent;
  let fixture: ComponentFixture<AddGuessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGuessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
