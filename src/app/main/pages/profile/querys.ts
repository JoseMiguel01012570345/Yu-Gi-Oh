import { gql } from "apollo-angular";

export interface MyDeck {
  ID: number;
  Name: string;
  Attribute: string;
  UsersId: string[];
}

export interface MyTournament {
  Date: number;
  TournamentNAme: string;
  TournamentDir: string;
}

export const GET_DECKS_DATA = gql`
  query Get_Decks_Data{
    ID
    Name
    Attribute
    UsersID
  }
`

export const GET_TOURNAMENTS_DATA = gql`
  query Get_Tournaments_Data{
    TournamentDate
    TournamentName
    Location
    ArcheTypeMostUsed
    Winner
  }
`
