import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeamListComponent} from './team-list/team-list.component'
import {MatchListComponent} from './match-list/match-list.component'

const routes: Routes = [
  { path: 'teams', component: TeamListComponent },
  { path: 'matches', component: MatchListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
