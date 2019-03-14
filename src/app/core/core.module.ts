import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { StandingsComponent } from './standings/standings.component';
import { RouterModule } from '@angular/router';
import { MakePicksComponent } from './make-picks/make-picks.component';
import { RulesComponent } from './rules/rules.component';
import { BonusQuestionsComponent } from './bonus-questions/bonus-questions.component';
import { MyEntryComponent } from './my-entry/my-entry.component';
import { MyEntryTabsComponent } from './my-entry-tabs/my-entry-tabs.component';
import { EntryDataService } from './entry-data.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { PickCardComponent } from './pick-card/pick-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoutComponent } from './logout/logout.component';
import { CalculateScoreService } from './calculate-score.service';
import { ScoringComponent } from './scoring/scoring.component';
import { ScoringTabsComponent } from './scoring-tabs/scoring-tabs.component';
import { SortByPipe } from './sort-by.pipe';
import { MyScoreComponent } from './my-score/my-score.component';
import { GroupsComponent } from './groups/groups.component';
import { HelperService } from './helper.service';
import { BonusQuestionsTableComponent } from './bonus-questions-table/bonus-questions-table.component';
import { CharacterEntryTableComponent } from './character-entry-table/character-entry-table.component';
import { PickCardResultsComponent } from './pick-card-results/pick-card-results.component';

@NgModule({
  declarations: [
    CoreComponent, 
    BannerComponent, 
    LoginComponent, 
    StandingsComponent, 
    MakePicksComponent, 
    RulesComponent, 
    BonusQuestionsComponent, 
    MyEntryComponent, 
    MyEntryTabsComponent, 
    PickCardComponent, LogoutComponent, ScoringComponent, ScoringTabsComponent, SortByPipe, MyScoreComponent, GroupsComponent, BonusQuestionsTableComponent, CharacterEntryTableComponent, PickCardResultsComponent
  ],
  imports: [
    CommonModule,
    AngularFireAuthModule,
    RouterModule,
    FormsModule,
    AngularFirestoreModule,
    BrowserAnimationsModule
  ],
  providers: [
    EntryDataService,
    CalculateScoreService,
    HelperService
  ]
})
export class CoreModule { }
