import { Character } from './characters';

export interface CharacterEntry {
    character: Character,
    dies: boolean,
    becomesWight?: boolean,
    episodeDeath?: number,
    killedBy?: number,
    sureThing?: boolean
}