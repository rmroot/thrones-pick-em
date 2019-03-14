import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickCardResultsComponent } from './pick-card-results.component';

describe('PickCardResultsComponent', () => {
  let component: PickCardResultsComponent;
  let fixture: ComponentFixture<PickCardResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickCardResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickCardResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
