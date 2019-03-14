import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusQuestionsTableComponent } from './bonus-questions-table.component';

describe('BonusQuestionsTableComponent', () => {
  let component: BonusQuestionsTableComponent;
  let fixture: ComponentFixture<BonusQuestionsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusQuestionsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusQuestionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
