import { Component, OnInit } from '@angular/core';
import { Character, CharacterList } from 'src/app/models/characters';
import { CharacterEntry } from 'src/app/models/entryData';

@Component({
  selector: 'app-make-picks',
  templateUrl: './make-picks.component.html',
  styleUrls: ['./make-picks.component.css']
})
export class MakePicksComponent implements OnInit {

  characterEntries: Array<CharacterEntry>;
  characterList: Array<Character>;
  constructor() { 
    this.characterList = CharacterList;
    this.characterEntries = new Array<CharacterEntry>();
    CharacterList.forEach(character => {
      this.characterEntries.push( 
        {
          character: character,
          dies: false,
          becomesWight: undefined,
          episodeDeath: 1,
          killedBy: undefined
        }
      )
    });
  }

  ngOnInit() {
  }

}
