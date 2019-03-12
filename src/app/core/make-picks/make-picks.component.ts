import { Component, OnInit } from '@angular/core';
import { Character, CharacterList } from 'src/app/models/characters';
import { CharacterEntry, UserEntry } from 'src/app/models/entryData';
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
  userEntry: UserEntry;
  docSubsciprtion: Subscription
  canSureThing: boolean;
  showSureThings: boolean = true;
  constructor(private entryDataService: EntryDataService) {
    this.characterList = CharacterList;
    this.docSubsciprtion = this.entryDataService.doc.subscribe(doc => {
      if(doc && doc.picks){
        this.characterEntries = JSON.parse(doc.picks);
      }else{
        this.initCharacterEntries();
      }
      this.checkSureThings();
    });
  }

  ngOnInit() {

  }

  ngOnDestroy(){
    this.docSubsciprtion.unsubscribe();
    this.save();
  }

  initCharacterEntries(){
    this.characterEntries = new Array<CharacterEntry>();
    CharacterList.forEach(character => {
      this.characterEntries.push(
        {
          character: character,
          dies: false,
          becomesWight: undefined,
          episodeDeath: 6,
          killedBy: undefined,
          sureThing: false
        }
      )
    });
  }

  save() {
    console.log('save')
    let stringifyEntry: string = JSON.stringify(this.characterEntries);
    this.entryDataService.updateData(stringifyEntry);
  }

  checkSureThings(){
   let sureThings = this.characterEntries.filter(character => {return character.sureThing == true});
   if(sureThings.length == 5){
     this.showSureThings = false;
   }else{
     this.showSureThings = true;
   }
  }
}
