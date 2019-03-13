import { Injectable } from '@angular/core';
import { UserEntry, CharacterEntry, BonusQuestions } from '../models/entryData';
import { masterEntry } from '../models/masterEntry';

@Injectable()
export class CalculateScoreService {

  constructor() { }

  calculateScore(userEntry: UserEntry): number {
    let score: number = 0;
    userEntry.characterEntries.forEach(character => {
      score += this.calculateCharacterScore(character);
    });
    score += this.calculateBonusQuestions(userEntry.bonusQuestions);
    return score;
  }

  calculateCharacterScore(characterEntry: CharacterEntry): number {
    let masterCharacterEntry: CharacterEntry = masterEntry.characterEntries.find(entry => { return entry.character.id == characterEntry.character.id });
    let score: number = 0;
    if (masterCharacterEntry.dies == characterEntry.dies) {
      if (characterEntry.character.characterLevel == 1) {
        score += 10;
      } else {
        score += 5;
      }
      if (characterEntry.dies == true) {
        if (characterEntry.becomesWight != undefined && characterEntry.becomesWight == masterCharacterEntry.becomesWight) {
          if (characterEntry.becomesWight == masterCharacterEntry.becomesWight) {
            score += 4;
          } else {
            score -= 4;
          }
        }
        if (characterEntry.episodeDeath == masterCharacterEntry.episodeDeath) {
          score += 8;
        }
        if (characterEntry.killedBy != undefined && characterEntry.killedBy == masterCharacterEntry.killedBy) {
          score += 15;
        }
      }
    }
    if (characterEntry.sureThing) {
      score = score * 1.5;
    }
    return score;
  }

  calculateBonusQuestions(bonusQuestions: BonusQuestions): number {
    let score: number = 0;
    if(bonusQuestions.cerseiPregnant == masterEntry.bonusQuestions.cerseiPregnant){
      score += 4;
    }
    if(bonusQuestions.dannyBaby == bonusQuestions.dannyBaby){
      score += 8;
    }
    if(bonusQuestions.promisedPrince == bonusQuestions.promisedPrince){
      score += 10;
    }
    if(bonusQuestions.sitsIronThrone == bonusQuestions.sitsIronThrone){
      score += 15;
    }
    return score;
  }

}
