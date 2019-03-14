import { Injectable } from '@angular/core';
import { Character, CharacterList } from '../models/characters';

@Injectable()
export class HelperService {

  constructor() { }

  getSitsIronThrone(num: number): string {
    switch (num) {
      case 1: {
        return 'Jon + Daenerys';
      };
      case 2: {
        return 'Just Jon';
      }
      case 3: {
        return 'Just Daenerys';
      }
      case 4: {
        return 'Bran';
      }
      case 5: {
        return 'Cersei';
      }
      case 6: {
        return 'Other';
      }
      case 7: {
        return 'Nigh King Kills Everyon';
      }
      default: {
        return undefined;
      }
    }
  }

  getPromisedPrince(num: number): string{
    switch (num) {
      case 1: {
        return 'Jon Snow';
      };
      case 2: {
        return 'Daenerys Targaryen';
      }
      case 3: {
        return 'Jamie Lannister';
      }
      case 4: {
        return 'Other';
      }
      case 5: {
        return 'Not Gonna Find Out';
      }
      default: {
        return undefined;
      }
    }
  }

  getCharacter(id: number): Character{
    let character: Character = CharacterList.find(character => {return character.id == id});
    return character;
  }
}
