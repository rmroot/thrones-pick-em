import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { StandingsComponent } from './standings/standings.component';
import { MyPicksComponent } from './my-picks/my-picks.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CoreComponent, BannerComponent, LoginComponent, StandingsComponent, MyPicksComponent],
  imports: [
    CommonModule,
    AngularFireAuthModule,
    RouterModule
  ]
})
export class CoreModule { }
