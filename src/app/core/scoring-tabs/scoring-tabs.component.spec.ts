import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoringTabsComponent } from './scoring-tabs.component';

describe('ScoringTabsComponent', () => {
  let component: ScoringTabsComponent;
  let fixture: ComponentFixture<ScoringTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoringTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoringTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
