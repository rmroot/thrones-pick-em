import { Component, OnInit } from '@angular/core';
import { Character, CharacterList } from 'src/app/models/characters';
import { CharacterEntry } from 'src/app/models/entryData';
import { EntryDataService } from '../entry-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-make-picks',
  templateUrl: './make-picks.component.html',
  styleUrls: ['./make-picks.component.css']
})
export class MakePicksComponent implements OnInit {

  characterEntries: Array<CharacterEntry>;
  characterList: Array<Character>;
  numSureThings: number = 0;
  characterEntrySub: Subscription;
  counter: any;

  constructor(public entryDataService: EntryDataService) {
    this.characterList = CharacterList;
  }

  ngOnInit() {
    this.characterEntrySub = this.entryDataService.characterEntries.subscribe(val => {
      this.characterEntries = val;
      this.checkSureThings();
    });
  }

  ngOnDestroy() {
    this.characterEntrySub.unsubscribe();
    this.save();
    if (this.counter) {
      clearTimeout(this.counter);
    }
  }

  save() {
    let stringifyEntry: string = JSON.stringify(this.characterEntries);
    this.entryDataService.updatePicks(stringifyEntry);
  }

  checkSureThings() {
    let sureThings = this.characterEntries.filter(character => { return character.sureThing == true });
    this.numSureThings = sureThings.length;
  }

  startSavePolling() {
    if (this.counter) {
      clearTimeout(this.counter);
    }
    this.counter = setTimeout(() => {
      this.save();
    }, 10000)
  }
}
