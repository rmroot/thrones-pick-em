import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UserEntry, CharacterEntry, BonusQuestions, UserEntryFirebase } from '../models/entryData';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { CharacterList } from '../models/characters';
import { User } from 'firebase';

@Injectable()
export class EntryDataService {

  userEntryCollection: AngularFirestoreCollection<UserEntryFirebase>;
  userEntryDoc: AngularFirestoreDocument<UserEntryFirebase>;
  userEntryDocObservable: Observable<UserEntryFirebase>;
  allEntriesDocObservable: Observable<UserEntryFirebase[]>;
  characterEntries: BehaviorSubject<Array<CharacterEntry>>;
  bonusQuestions: BehaviorSubject<BonusQuestions>;
  user: User;
  allEntries: BehaviorSubject<Array<UserEntry>>;
  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) {
    this.characterEntries = new BehaviorSubject<Array<CharacterEntry>>([]);
    this.bonusQuestions = new BehaviorSubject<BonusQuestions>({
      sitsIronThrone: 1,
      cerseiPregnant: false,
      dannyBaby: false,
      promisedPrince: 1
    });
    this.allEntries = new BehaviorSubject<Array<UserEntry>>([]);

    afAuth.user.subscribe(user => {
      this.user = user;
      if (this.user) {
        this.userEntryCollection = this.afs.collection<any>('users');
        this.userEntryDoc = this.userEntryCollection.doc(this.user.uid);
        this.allEntriesDocObservable = this.userEntryCollection.valueChanges();
        this.userEntryDocObservable = this.userEntryDoc.valueChanges();
        this.subscribeData();
      }
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
    let characterEntryString: string = JSON.stringify(characterEntries);
    let bonusQuestions: BonusQuestions = {
      sitsIronThrone: 1,
      cerseiPregnant: false,
      dannyBaby: false,
      promisedPrince: 1
    };
    let bonusQuestionString: string = JSON.stringify(bonusQuestions);
    this.userEntryCollection.doc(this.user.uid).set(
      {
        characterEntries: characterEntryString,
        displayName: this.user.displayName,
        bonusQuestions: bonusQuestionString,
        userId: this.user.uid
      }
    )
  }

  updateCharacterEntries(characterEntriesString: string) {
    this.userEntryDoc.update({
      characterEntries: characterEntriesString,
      userId: this.user.uid
    });
  }

  updateBonusQuestions(bonusQuestions: string) {
    this.userEntryDoc.update({
      bonusQuestions: bonusQuestions,
      userId: this.user.uid
    });
  }

  subscribeData() {
    this.userEntryDocObservable.subscribe(val => {
      if (val) {
        if (val.characterEntries) {
          this.characterEntries.next(JSON.parse(val.characterEntries));
        }
        if (val.bonusQuestions) {
          this.bonusQuestions.next(JSON.parse(val.bonusQuestions));
        }
      } else {
        this.addUserEntry();
      }
    })

    this.allEntriesDocObservable.subscribe(entries => {
      let userEntries: Array<UserEntry> = new Array<UserEntry>();
      if (entries) {
        entries.forEach(entry => {
          userEntries.push(
            {
              userId: entry.userId,
              characterEntries: JSON.parse(entry.characterEntries),
              bonusQuestions: JSON.parse(entry.bonusQuestions),
              displayName: entry.displayName
            }
          )
        })
      }
      this.allEntries.next(userEntries);
    })
  }
}
