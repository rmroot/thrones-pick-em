import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CharacterEntry } from 'src/app/models/entryData';
import { Character, CharacterList } from 'src/app/models/characters';

@Component({
  selector: 'app-pick-card',
  templateUrl: './pick-card.component.html',
  styleUrls: ['./pick-card.component.css']
})
export class PickCardComponent implements OnInit {
  @Input()
  characterEntry: CharacterEntry;
  @Input()
  index: number;
  @Input()
  numSureThings: number;
  @Output('emitCheckSureThings')
  emitCheckSureThings = new EventEmitter<boolean>();
  @Output('emitSave')
  emitSave = new EventEmitter<boolean>();

  characterList: Array<Character>;
  constructor() { }

  ngOnInit() {
    this.characterList = CharacterList;
  }

  save(){
    this.emitSave.emit(true);
  }
  
  checkSureThings(){
    this.emitCheckSureThings.emit(true);
  }

  setLives(characterEntry: CharacterEntry){
    characterEntry.dies = false;
    this.save();
  }

  setDies(characterEntry: CharacterEntry){
    characterEntry.dies = true;
    this.save();
  }

  setWight(characterEntry: CharacterEntry){
    characterEntry.becomesWight = true;
    this.save();
  }
  
  setNotWight(characterEntry: CharacterEntry){
    characterEntry.becomesWight = false;
    this.save();
  }
  
  setPass(characterEntry: CharacterEntry){
    characterEntry.becomesWight = undefined;
    this.save();
  }

  setSureThing(characterEntry: CharacterEntry){
    characterEntry.sureThing = !characterEntry.sureThing;
    this.checkSureThings();
    this.save();
  }
}
