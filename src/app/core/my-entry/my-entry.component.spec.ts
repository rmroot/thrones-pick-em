import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEntryComponent } from './my-entry.component';

describe('MyEntryComponent', () => {
  let component: MyEntryComponent;
  let fixture: ComponentFixture<MyEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
