import { Component, OnInit, Input } from '@angular/core';
import { HelperService } from '../helper.service';
import { BonusQuestions, UserEntry } from 'src/app/models/entryData';
import { masterEntry } from 'src/app/models/masterEntry';

@Component({
  selector: 'app-bonus-questions-table',
  templateUrl: './bonus-questions-table.component.html',
  styleUrls: ['./bonus-questions-table.component.css']
})
export class BonusQuestionsTableComponent implements OnInit {
  @Input()
  bonusQuestions: BonusQuestions;

  masterEntry: UserEntry;
  constructor(private helperService: HelperService) {
    this.masterEntry = masterEntry;
   }

  ngOnInit() {

  }


  getSitsIronThrone(num: number): string {
    return this.helperService.getSitsIronThrone(num);
  }

  getPromisedPrince(num: number): string {
    return this.helperService.getPromisedPrince(num);
  }
}
