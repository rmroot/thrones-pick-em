import { Component, OnInit } from '@angular/core';
import { EntryDataService } from '../entry-data.service';
import { BonusQuestions } from 'src/app/models/entryData';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bonus-questions',
  templateUrl: './bonus-questions.component.html',
  styleUrls: ['./bonus-questions.component.css']
})
export class BonusQuestionsComponent implements OnInit {

  bonusQuestions: BonusQuestions;
  bonusQuestionsSubscription: Subscription;
  constructor(private entryDataService: EntryDataService) { }

  ngOnInit() {
    this.bonusQuestionsSubscription = this.entryDataService.bonusQuestions.subscribe(val => {
      this.bonusQuestions = val;
    })
  }

  ngOnDestroy() {
    this.bonusQuestionsSubscription.unsubscribe();
    this.save();
  }

  save(){
    this.entryDataService.updateBonusQuestions(JSON.stringify(this.bonusQuestions));
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
