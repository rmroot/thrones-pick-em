import { Component, OnInit, Input } from '@angular/core';
import { CharacterEntry, UserEntry } from 'src/app/models/entryData';
import { masterEntry } from 'src/app/models/masterEntry';

@Component({
  selector: 'app-character-entry-table',
  templateUrl: './character-entry-table.component.html',
  styleUrls: ['./character-entry-table.component.css']
})
export class CharacterEntryTableComponent implements OnInit {
  @Input()
  characterEntries: Array<CharacterEntry>;

  masterEntry: UserEntry;
  constructor() {
    this.masterEntry = masterEntry;
   }

  ngOnInit() {
  }

}
