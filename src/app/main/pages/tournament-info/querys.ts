import { gql } from "apollo-angular";

export interface suscribes {
  PlayerID: string;
  DeckID: number;
  TournamentDate: number;
  TournamentName: string;
}

export const GET_TOURNAMENT = gql`
  query Get_Tournament($tournamentDate: Int!, $tournamentName: String!){
    tournament(tournamentDate: $tournamentDate, tournamentName: $tournamentName){
      Date
      TournamentName
      TournamentDir
    }
  }
`

export const GET_SUSCRIBES = gql`
  query Get_Suscribes{
    PlayerID
    DeckID
    TournamentName
    TournamentDate
  }
`
