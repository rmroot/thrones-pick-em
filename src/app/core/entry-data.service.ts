import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UserEntry, CharacterEntry, BonusQuestions } from '../models/entryData';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { CharacterList } from '../models/characters';
import { User } from 'firebase';

@Injectable()
export class EntryDataService {

  entryCollection: AngularFirestoreCollection<UserEntry>;
  userDoc: AngularFirestoreDocument<any>;
  doc: Observable<any>;

  characterEntries: BehaviorSubject<Array<CharacterEntry>>;
  bonusQuestions: BehaviorSubject<BonusQuestions>;
  user: User;
  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) {
    this.characterEntries = new BehaviorSubject<Array<CharacterEntry>>([]);
    this.bonusQuestions = new BehaviorSubject<BonusQuestions>({
      sitsIronThrone: 1,
      cerseiPregnant: false,
      dannyBaby: false,
      promisedPrince: 1
    });

    afAuth.user.subscribe(user => {
      this.user = user;
      this.entryCollection = this.afs.collection<any>('users');
      this.userDoc = this.entryCollection.doc(this.user.uid);
      this.doc = this.userDoc.valueChanges();
      this.subscribeData();
    })
  }

  addUserEntry() {
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
    this.entryCollection.doc(this.user.uid).set(
      {
        picks: pickString,
        displayName: this.user.displayName,
        bonusQuestions: bonusQuestionString
      }
    )
  }

  updatePicks(picks: string) {
    this.userDoc.update({
      picks: picks
    });
  }

  updateBonusQuestions(bonusQuestions: string) {
    this.userDoc.update({
      bonusQuestions: bonusQuestions
    });
  }

  subscribeData() {
    this.doc.subscribe(val => {
      if (val) {
        if (val.picks) {
          this.characterEntries.next(JSON.parse(val.picks));
        }
        if (val.bonusQuestions) {
          this.bonusQuestions.next(JSON.parse(val.bonusQuestions));
        }
      }else{
        this.addUserEntry();
      }
    })
  }
}
