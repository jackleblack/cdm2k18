import { Component, OnInit } from '@angular/core';
import { Team } from '../core/team.model';
// (1) Import
import { TeamService } from "../core/team.service";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams: Team[];

  // (2) Inject
  constructor(private teamService: TeamService) {
    this.teams = [];
  }

  ngOnInit() {
    // (3) Subscribe
    this.teamService.list().subscribe((teams: Team[]) => {
      // (4) Store
      this.teams = teams;
    });
  }
}
