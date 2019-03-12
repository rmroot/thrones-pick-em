import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UserEntry, CharacterEntry } from '../models/entryData';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { CharacterList } from '../models/characters';

@Injectable()
export class EntryDataService {

  entryCollection: AngularFirestoreCollection<any>;
  entries: Observable<any[]>;
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
    this.entryCollection.doc(this.userId).set(
      {
        picks: pickString,
        displayName: displayName
      }
    )
  }


  updateData(picks: string){
    this.userDoc.update({
      picks: picks
    });
  }
}
