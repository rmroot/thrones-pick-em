import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterEntryTableComponent } from './character-entry-table.component';

describe('CharacterEntryTableComponent', () => {
  let component: CharacterEntryTableComponent;
  let fixture: ComponentFixture<CharacterEntryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterEntryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterEntryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
