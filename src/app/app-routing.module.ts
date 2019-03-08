import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { StandingsComponent } from './core/standings/standings.component';
import { MyPicksComponent } from './core/my-picks/my-picks.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
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
        path: 'my-picks',
        component: MyPicksComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
