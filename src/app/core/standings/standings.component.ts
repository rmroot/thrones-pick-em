import { Component, OnInit } from '@angular/core';
import { EntryDataService } from '../entry-data.service';
import { CalculateScoreService } from '../calculate-score.service';
import { Subscription } from 'rxjs';
import { UserEntry } from 'src/app/models/entryData';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {


  standings: Array<{ score: number, entry: UserEntry }>;
  allEntriesSubscription: Subscription;
  constructor(private entryDataService: EntryDataService, private calculateScoreService: CalculateScoreService) { }

  ngOnInit() {
    this.standings = new Array();
    this.allEntriesSubscription = this.entryDataService.allEntries.subscribe(entries => {
      if (entries) {
        this.calculateScores(entries);
      }
    })
  }

  ngOnDestroy() {
    this.allEntriesSubscription.unsubscribe();
  }

  calculateScores(entries: Array<UserEntry>) {
    entries.forEach(entry => {
      let score: number = this.calculateScoreService.calculateScore(entry);
      this.standings.push(
        {
          entry: entry,
          score: score
        }
      );
    });
  }

}
