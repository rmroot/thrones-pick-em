import { Character } from './characters';

export interface CharacterEntry {
    character: Character,
    dies: boolean,
    becomesWight?: boolean,
    episodeDeath?: number,
    killedBy?: number,
    sureThing?: boolean
}

export interface UserEntry {
    userId: string,
    characterEntries: Array<CharacterEntry>,
    bonusQuestions: BonusQuestions,
    displayName: string
}

export interface BonusQuestions {
    sitsIronThrone: number,
    cerseiPregnant: boolean,
    dannyBaby: boolean,
    promisedPrince: number
}