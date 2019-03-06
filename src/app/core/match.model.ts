import { Injectable } from '@angular/core';
import { Adapter } from '../adapter';

export class Match {
  constructor(
    public venue: string,    
    public location: string,
    public status: string,
    public time: string,
    public fifa_id: string,
    public weather: Weather,
    public attendance: string,
    public officials: (string)[] | null,
    public stage_name: string,
    public home_team_country: string,
    public away_team_country: string,
    public datetime: string,
    public winner: string,
    public winner_code: string,
    public home_team: HomeTeamOrAwayTeam,
    public away_team: HomeTeamOrAwayTeam,
    public home_team_events: (HomeTeamEventsEntityOrAwayTeamEventsEntity)[] | null,
    public away_team_events: (HomeTeamEventsEntityOrAwayTeamEventsEntity)[] | null,
    public home_team_statistics: HomeTeamStatisticsOrAwayTeamStatistics,
    public away_team_statistics: HomeTeamStatisticsOrAwayTeamStatistics,
    public last_event_update_at: string,
    public last_score_update_at: string,
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class MatchAdapter implements Adapter<Match> {

  adapt(item: any): Match {
    return new Match(
      item.venue,
      item.location,
      item.status,
      item.time,
      item.fifa_id,
      item.weather,
      item.attendance,
      item.officials,
      item.stage_name,
      item.home_team_country,
      item.away_team_country,
      item.datetime,
      item.winner,
      item.winner_code,
      item.home_team,
      item.away_team,
      item.home_team_events,
      item.away_team_events,
      item.home_team_statistics,
      item.away_team_statistics,
      item.last_event_update_at,
      item.last_score_update_at,
    )
  }
}

export interface Matches {
  venue: string;
  location: string;
  status: string;
  time: string;
  fifa_id: string;
  weather: Weather;
  attendance: string;
  officials?: (string)[] | null;
  stage_name: string;
  home_team_country: string;
  away_team_country: string;
  datetime: string;
  winner: string;
  winner_code: string;
  home_team: HomeTeamOrAwayTeam;
  away_team: HomeTeamOrAwayTeam;
  home_team_events?: (HomeTeamEventsEntityOrAwayTeamEventsEntity)[] | null;
  away_team_events?: (HomeTeamEventsEntityOrAwayTeamEventsEntity)[] | null;
  home_team_statistics: HomeTeamStatisticsOrAwayTeamStatistics;
  away_team_statistics: HomeTeamStatisticsOrAwayTeamStatistics;
  last_event_update_at: string;
  last_score_update_at: string;
}
export interface Weather {
  humidity: string;
  temp_celsius: string;
  temp_farenheit: string;
  wind_speed: string;
  description: string;
}
export interface HomeTeamOrAwayTeam {
  country: string;
  code: string;
  goals: number;
  penalties: number;
}
export interface HomeTeamEventsEntityOrAwayTeamEventsEntity {
  id: number;
  type_of_event: string;
  player: string;
  time: string;
}
export interface HomeTeamStatisticsOrAwayTeamStatistics {
  country: string;
  attempts_on_goal: number;
  on_target: number;
  off_target: number;
  blocked: number;
  woodwork: number;
  corners: number;
  offsides: number;
  ball_possession: number;
  pass_accuracy: number;
  num_passes: number;
  passes_completed: number;
  distance_covered: number;
  balls_recovered: number;
  tackles: number;
  clearances: number;
  yellow_cards: number;
  red_cards: number;
  fouls_committed: number;
  tactics: string;
  starting_eleven?: (StartingElevenEntityOrSubstitutesEntity)[] | null;
  substitutes?: (StartingElevenEntityOrSubstitutesEntity)[] | null;
}
export interface StartingElevenEntityOrSubstitutesEntity {
  name: string;
  captain: boolean;
  shirt_number: number;
  position: string;
}
