import { Injectable } from '@angular/core';
import { Adapter } from '../adapter';

export class Team {
  constructor(
    public id: number,
    public country: string,
    public alternate_name: string,
    public fifa_code: string,
    public group_id: number,
    public group_letter: string,
    public wins: number,
    public draws: number,
    public losses: number,
    public games_played: number,
    public points: number,
    public goals_for: number,
    public goals_against: number,
    public goal_differential: number,
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class TeamAdapter implements Adapter<Team> {

  adapt(item: any): Team {
    return new Team(
      item.id,
      item.country,
      item.alternate_name,
      item.fifa_code,
      item.group_id,
      item.group_letter,
      item.wins,
      item.draws,
      item.losses,
      item.games_played,
      item.points,
      item.goals_for,
      item.goals_against,
      item.goal_differential
    )
  }
}