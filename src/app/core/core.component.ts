import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { EntryDataService } from './entry-data.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private entryDataService: EntryDataService) { }

  ngOnInit() {
    this.afAuth.user.subscribe(user => {
      if (user) {
        this.entryDataService.getUserEntry(user.uid);
        this.entryDataService.userData.subscribe(userData => {
          if (userData.length == 0) {
            this.entryDataService.addUserEntry(user.displayName);
          }
        });
      }
    })
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
