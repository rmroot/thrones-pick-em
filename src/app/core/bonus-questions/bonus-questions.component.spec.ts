import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusQuestionsComponent } from './bonus-questions.component';

describe('BonusQuestionsComponent', () => {
  let component: BonusQuestionsComponent;
  let fixture: ComponentFixture<BonusQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
