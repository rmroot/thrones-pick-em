import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { StandingsComponent } from './core/standings/standings.component';
import { MyPicksComponent } from './core/my-picks/my-picks.component';
import { MakePicksComponent } from './core/make-picks/make-picks.component';
import { MyEntryComponent } from './core/my-entry/my-entry.component';
import { RulesComponent } from './core/rules/rules.component';
import { BonusQuestionsComponent } from './core/bonus-questions/bonus-questions.component';

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
        path: 'my-picks',
        component: MyPicksComponent
      },
      {
        path: 'standings',
        component: StandingsComponent
      },
      {
        path: 'my-entry',
        component: MyEntryComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'rules'
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
