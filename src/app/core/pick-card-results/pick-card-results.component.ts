import { Component, OnInit, Input } from '@angular/core';
import { CharacterEntry } from 'src/app/models/entryData';
import { HelperService } from '../helper.service';
import { CalculateScoreService } from '../calculate-score.service';

@Component({
  selector: 'app-pick-card-results',
  templateUrl: './pick-card-results.component.html',
  styleUrls: ['./pick-card-results.component.css']
})
export class PickCardResultsComponent implements OnInit {
  @Input()
  characterEntry: CharacterEntry;
  @Input()
  masterEntry: CharacterEntry;

  constructor(private helperService: HelperService, private calculateScoreService: CalculateScoreService) { }

  ngOnInit() {
  }

  getDiesPts(): number {
    if (this.masterEntry.dies != this.characterEntry.dies) {
      return 0;
    } else {
      if (this.masterEntry.character.characterLevel == 1) {
        if (this.characterEntry.dies == true) {
          return 15;
        } else {
          return 10;
        }
      } else {
        if (this.characterEntry.dies == true) {
          return 10;
        } else {
          return 5;
        }
      }
    }
  }

  getTurnsWightScore(): number {
    if (this.masterEntry.becomesWight == this.characterEntry.becomesWight) {
      return 4;
    } else {
      return -4;
    }
  }

  getKilledBy(num: number): string {
    if (num == 28) {
      return 'Night King'
    } else if (num == 29) {
      return 'Viserion Zombie Dragon'
    } else {
      return this.helperService.getCharacter(num).name;
    }
  }

  getCharacterScore(): number {
    return this.calculateScoreService.calculateCharacterScore(this.characterEntry);
  }
}
