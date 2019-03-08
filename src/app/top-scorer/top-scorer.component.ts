import { Component, OnInit } from '@angular/core';
import { Match } from '../core/match.model';

// (1) Import
import { MatchService } from "../core/match.service";

@Component({
  selector: 'app-top-scorer',
  templateUrl: './top-scorer.component.html',
  styleUrls: ['./top-scorer.component.css']
})
export class TopScorerComponent implements OnInit {

  // topScorers: Player[];

  // (2) Inject
  constructor(private matchService: MatchService) {
    // this.topScorers = [];
  }

  ngOnInit() {
    // (3) Subscribe
    // this.matchService.topScorer().subscribe((matches: Match[]) => {
    //   // (4) Store
    //   this.matchesByStage = matches.reverse().reduce((r, { stage_name }) => {
    //     if (!r.some(o => o.stage_name == stage_name)) {
    //       r.push({ stage_name, groupItem: matches.filter(v => v.stage_name == stage_name) });
    //     }
    //     return r;
    //   }, []);
    //   console.log(this.matchesByStage);
    // });
  }
}
