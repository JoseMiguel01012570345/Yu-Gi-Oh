import { gql } from 'apollo-angular';

export interface Match {
  MatchID: number;
  TournamentName: string;
  TournamentDate: number;
  PlayerOneResult: number;
  PlayerTwoResult: number;
  Rounds: number;
}

export const GET_MATCHS = gql`
  query Get_Matchs{
    MatchID
    TournamentName
    TournamentDate
    PlayerOneResult
    PlayerTwoResult
    Rounds
  }
`
