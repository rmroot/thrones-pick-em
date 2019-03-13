import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { EntryDataService } from './entry-data.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private entryDataService: EntryDataService) { }

  ngOnInit() {
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
