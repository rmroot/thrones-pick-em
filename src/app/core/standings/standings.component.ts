import { Component, OnInit } from '@angular/core';
import { EntryDataService } from '../entry-data.service';
import { CalculateScoreService } from '../calculate-score.service';
import { Subscription } from 'rxjs';
import { UserEntry, CharacterEntry } from 'src/app/models/entryData';

export interface Standing {
  score: number, 
  entry: UserEntry,
  sureThings: Array<CharacterEntry>
}


@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {


  standings: Array<Standing>;
  allEntriesSubscription: Subscription;
  constructor(private entryDataService: EntryDataService, private calculateScoreService: CalculateScoreService) { }

  ngOnInit() {
    this.allEntriesSubscription = this.entryDataService.allEntries.subscribe(entries => {
      this.standings = new Array();
      if (entries) {
        this.calculateScores(entries);
      }
    });
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
          score: score,
          sureThings: this.getSureThings(entry.characterEntries)
        }
      );
    });
  }

  getSureThings(characterEntries: Array<CharacterEntry>): Array<CharacterEntry> {
    let sureThings: Array<CharacterEntry> = characterEntries.filter(entry => { return entry.sureThing == true });
    return sureThings;
  }
}
