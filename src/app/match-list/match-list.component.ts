import { Component, OnInit } from '@angular/core';
import { Match } from '../core/match.model';
// (1) Import
import { MatchService } from "../core/match.service";

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {

  matches: Match[];

  // (2) Inject
  constructor(private matchService: MatchService) {
    this.matches = [];
  }

  ngOnInit() {
    // (3) Subscribe
    this.matchService.list().subscribe((matches: Match[]) => {
      // (4) Store
      this.matches = matches;
      console.log(matches);
    });
  }
}
