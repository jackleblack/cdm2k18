import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeamListComponent} from './team-list/team-list.component'
import {MatchListComponent} from './match-list/match-list.component'
import {MyDashboardComponent} from './my-dashboard/my-dashboard.component'

const routes: Routes = [
  { path: '', component: MyDashboardComponent },
  { path: 'teams', component: TeamListComponent },
  { path: 'matches', component: MatchListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
