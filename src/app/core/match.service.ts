import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Match, MatchAdapter } from './match.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private baseUrl = 'https://worldcup.sfg.io/matches';

  constructor(private http: HttpClient, private adapter: MatchAdapter) { }


  list(): Observable<Match[]> {
    const url = `${this.baseUrl}/`;
    return this.http.get(url).pipe(
      // Adapt each item in the raw data array
      map((data: any[]) => data.map(item => this.adapter.adapt(item))),
    );

  }

  // topScorer(): Observable<Match[]> {
  //   const url = `${this.baseUrl}/`;
  //   return this.http.get(url).pipe(
  //     // Adapt each item in the raw data array
  //     // map((data: any[]) => data.pluck('home_team_events').filter(home_team_event => home_team_event.type_of_event === "goal"))),
  //     map((data: any[]) => data.pluck('home_team_events').filter(home_team_event => home_team_event.type_of_event === "goal"))),
  //   );

  // }
}
