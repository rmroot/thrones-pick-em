import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEntryTabsComponent } from './my-entry-tabs.component';

describe('MyEntryTabsComponent', () => {
  let component: MyEntryTabsComponent;
  let fixture: ComponentFixture<MyEntryTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEntryTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEntryTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
