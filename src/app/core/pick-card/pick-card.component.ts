import { Component, OnInit, Input } from '@angular/core';
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

  characterList: Array<Character>;
  constructor() { }

  ngOnInit() {
    this.characterList = CharacterList;
  }

  setLives(characterEntry: CharacterEntry){
    characterEntry.dies = false;
  }

  setDies(characterEntry: CharacterEntry){
    characterEntry.dies = true;
  }

  setWight(characterEntry: CharacterEntry){
    characterEntry.becomesWight = true;
  }
  
  setNotWight(characterEntry: CharacterEntry){
    characterEntry.becomesWight = false;
  }
  
  setPass(characterEntry: CharacterEntry){
    characterEntry.becomesWight = undefined;
  }

  setSureThing(characterEntry: CharacterEntry){
    console.log(characterEntry.character.name);
    console.log(characterEntry.sureThing);
    characterEntry.sureThing = !characterEntry.sureThing;
  }
}
