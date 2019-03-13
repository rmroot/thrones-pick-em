import { Component, OnInit } from '@angular/core';
import { EntryDataService } from '../entry-data.service';
import { CalculateScoreService } from '../calculate-score.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {


  standings: Array<{ name: string, score: number }>;
  constructor(private entryDataService: EntryDataService, private calculateScoreService: CalculateScoreService) { }

  ngOnInit() {
    this.standings = new Array();
    // this.entryDataService.allEntries.subscribe(entries => {
    //   if (entries) {
    //     entries.forEach(entry => {
    //       let score: number = this.calculateScoreService.calculateScore(
    //         {
    //           displayName: entry.displayName,

    //         }
    //       );
    //       this.standings.push(
    //         {
    //           name: entry.displayName,
    //           score: score
    //         }
    //       );
    //       console.log(this.standings);
    //     });
    //   }
    // })
  }

}
