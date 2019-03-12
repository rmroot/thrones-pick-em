import { Component, OnInit } from '@angular/core';
import { EntryDataService } from '../entry-data.service';
import { Subscription } from 'rxjs';
import { BonusQuestions } from 'src/app/models/entryData';

@Component({
  selector: 'app-bonus-questions',
  templateUrl: './bonus-questions.component.html',
  styleUrls: ['./bonus-questions.component.css']
})
export class BonusQuestionsComponent implements OnInit {

  docSubscription: Subscription;
  bonusQuestions: BonusQuestions;
  constructor(private entryDataService: EntryDataService) { }

  ngOnInit() {
    this.docSubscription = this.entryDataService.doc.subscribe(doc => {
      if (doc && doc.bonusQuestions) {
        this.bonusQuestions = JSON.parse(doc.bonusQuestions);
      }else{
        this.bonusQuestions = {
          sitsIronThrone: 1,
          cerseiPregnant: false,
          dannyBaby: false,
          promisedPrince: 1
        }
      }
    });
  }

  ngOnDestroy() {
    this.entryDataService.updateBonusQuestions(JSON.stringify(this.bonusQuestions));
    this.docSubscription.unsubscribe();
  }
  setThrone(num: number) {
    this.bonusQuestions.sitsIronThrone = num;
  }

  setCerseiPregnant(bool: boolean) {
    this.bonusQuestions.cerseiPregnant = bool;
  }

  setDannyChild(bool: boolean) {
    this.bonusQuestions.dannyBaby = bool;
  }

  setPromisedPrince(num: number) {
    this.bonusQuestions.promisedPrince = num;
  }
}
