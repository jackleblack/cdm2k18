import { Component, OnInit } from '@angular/core';
import { Match } from '../core/match.model';
// (1) Import
import { MatchService } from "../core/match.service";

import * as CountryCodes from 'country-code-info';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {

  matchesByStage: Match[];

  // (2) Inject
  constructor(private matchService: MatchService) {
    this.matchesByStage = [];
  }

  ngOnInit() {
    // (3) Subscribe
    this.matchService.list().subscribe((matches: Match[]) => {
      // (4) Store
      this.matchesByStage = matches.map((obj) => {
        obj.away_team.flag =  CountryCodes.findCountry({'fifa': obj.away_team.code}).a3.toLowerCase();
        obj.home_team.flag =  CountryCodes.findCountry({'fifa': obj.home_team.code}).a3.toLowerCase();
        return obj;
      }).reverse().reduce((r, { stage_name }) => {
        if (!r.some(o => o.stage_name == stage_name)) {
          r.push({ stage_name, groupItem: matches.filter(v => v.stage_name == stage_name) });
        }
        return r;
      }, []);
      console.log(this.matchesByStage);
    });
  }
}
