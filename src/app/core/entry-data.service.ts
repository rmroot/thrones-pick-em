import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UserEntry, CharacterEntry, BonusQuestions } from '../models/entryData';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { CharacterList } from '../models/characters';

@Injectable()
export class EntryDataService {

  entryCollection: AngularFirestoreCollection<UserEntry>;
  entries: Observable<UserEntry[]>;
  userId: string;
  userData: Observable<any[]>;
  userDoc: AngularFirestoreDocument<any>;
  doc: Observable<any>;
  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) { 
    this.userData = new Observable<any>();
    this.doc = new Observable<any>();
  }

  getUserEntry(userId: string){
    this.userId = userId;
    this.entryCollection = this.afs.collection<any>('users');
    this.userDoc = this.entryCollection.doc(this.userId);
    this.doc = this.userDoc.valueChanges()
    this.userData = this.entryCollection.valueChanges();
  }

  addUserEntry(displayName: string){
    let characterEntries = new Array<CharacterEntry>();
    CharacterList.forEach(character => {
      characterEntries.push(
        {
          character: character,
          dies: false,
          becomesWight: undefined,
          episodeDeath: 1,
          killedBy: undefined
        }
      )
    });
    let pickString: string = JSON.stringify(characterEntries);
    let bonusQuestions: BonusQuestions = {
      sitsIronThrone: 1,
      cerseiPregnant: false,
      dannyBaby: false,
      promisedPrince: 1
    };
    let bonusQuestionString: string = JSON.stringify(bonusQuestions);
    this.entryCollection.doc(this.userId).set(
      {
        picks: pickString,
        displayName: displayName,
        bonusQuestions: bonusQuestionString
      }
    )
  }

  updatePicks(picks: string){
    this.userDoc.update({
      picks: picks
    });
  }

  updateBonusQuestions(bonusQuestions: string){
    this.userDoc.update({
      bonusQuestions: bonusQuestions
    });
  }
}
