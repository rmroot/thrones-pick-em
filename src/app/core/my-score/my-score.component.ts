import { Component, OnInit } from '@angular/core';
import { CharacterEntry, BonusQuestions, UserEntry } from 'src/app/models/entryData';
import { Subscription } from 'rxjs';
import { EntryDataService } from '../entry-data.service';
import { masterEntry } from 'src/app/models/masterEntry';
import { CalculateScoreService } from '../calculate-score.service';

@Component({
  selector: 'app-my-score',
  templateUrl: './my-score.component.html',
  styleUrls: ['./my-score.component.css']
})
export class MyScoreComponent implements OnInit {

  characterEntries: Array<CharacterEntry>;
  characterEntrySub: Subscription;

  bonusQuestions: BonusQuestions;
  bonusQuestionsSubscription: Subscription;

  masterEntry: UserEntry;
  totalEntryScore: number;
  totalPickEmScore: number;
  totalBonusQuestionScore: number;
  constructor(private entryDataService: EntryDataService, private calculateScoreService: CalculateScoreService) {
    this.masterEntry = masterEntry;
  }

  ngOnInit() {
    this.characterEntrySub = this.entryDataService.characterEntries.subscribe(val => {
      this.characterEntries = val;
    });
    this.bonusQuestionsSubscription = this.entryDataService.bonusQuestions.subscribe(val => {
      this.bonusQuestions = val;
    });
  }

  getBonusQuestionScore(): number {
    return this.calculateScoreService.calculateBonusQuestions(this.bonusQuestions);
  }

  getCharacterScore(): number {
    return this.calculateScoreService.calculateScore({
      characterEntries: this.characterEntries,
      bonusQuestions: this.bonusQuestions,
      displayName: '',
      userId: ''
    });
  }

  getPickEmScore(): number {
    let score: number = 0;
    this.characterEntries.forEach(character => {
      score += this.calculateScoreService.calculateCharacterScore(character)
    })
    return score;
  }
}
