import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { StandingsComponent } from './standings/standings.component';
import { MyPicksComponent } from './my-picks/my-picks.component';
import { RouterModule } from '@angular/router';
import { MakePicksComponent } from './make-picks/make-picks.component';
import { RulesComponent } from './rules/rules.component';
import { BonusQuestionsComponent } from './bonus-questions/bonus-questions.component';
import { MyEntryComponent } from './my-entry/my-entry.component';
import { MyEntryTabsComponent } from './my-entry/my-entry-tabs/my-entry-tabs.component';

@NgModule({
  declarations: [
    CoreComponent, 
    BannerComponent, 
    LoginComponent, 
    StandingsComponent, 
    MyPicksComponent, 
    MakePicksComponent, 
    RulesComponent, 
    BonusQuestionsComponent, 
    MyEntryComponent, 
    MyEntryTabsComponent
  ],
  imports: [
    CommonModule,
    AngularFireAuthModule,
    RouterModule,
    FormsModule
  ]
})
export class CoreModule { }
