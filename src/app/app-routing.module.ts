import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { StandingsComponent } from './core/standings/standings.component';
import { MakePicksComponent } from './core/make-picks/make-picks.component';
import { MyEntryComponent } from './core/my-entry/my-entry.component';
import { RulesComponent } from './core/rules/rules.component';
import { BonusQuestionsComponent } from './core/bonus-questions/bonus-questions.component';
import { LogoutComponent } from './core/logout/logout.component';
import { ScoringComponent } from './core/scoring/scoring.component';
import { MyScoreComponent } from './core/my-score/my-score.component';
import { GroupsComponent } from './core/groups/groups.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'my-entry'

      },
      {
        path: 'scoring',
        component: ScoringComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'standings'
          },
          {
            path: 'standings',
            component: StandingsComponent
          },
          {
            path: 'my-score',
            component: MyScoreComponent
          },
          {
            path: 'groups',
            component: GroupsComponent
          }
        ]
      },
      {
        path: 'my-entry',
        component: MyEntryComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'make-picks'
          },
          {
            path: 'rules',
            component: RulesComponent
          },
          {
            path: 'make-picks',
            component: MakePicksComponent
          },
          {
            path: 'bonus-questions',
            component: BonusQuestionsComponent
          }
        ]
      },
      {
        path: 'logout',
        component: LogoutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
