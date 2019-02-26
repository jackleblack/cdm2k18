import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team, TeamAdapter } from './team.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private baseUrl = 'https://worldcup.sfg.io/teams/results';

  constructor(private http: HttpClient, private adapter: TeamAdapter) { }


  list(): Observable<Team[]> {
    const url = `${this.baseUrl}/`;
    return this.http.get(url).pipe(
      // Adapt each item in the raw data array
      map((data: any[]) => data.map(item => this.adapter.adapt(item))),
    );

  }
}
