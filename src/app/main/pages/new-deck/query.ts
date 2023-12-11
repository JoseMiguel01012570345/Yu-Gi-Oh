import {gql } from 'apollo-angular'

//esta es la interfaz de los arquetipos
export interface ArcheType {
  ArcheTypeName: string
}

export interface Tournament {
  Date: number;
  TournamentName: string;
  TournamentDir: string;
}

export const CREATE_TOURNAMENT = gql`
  mutation Create_Tournament($input: CreateTournamentInput!){
    createTournament(createTournamentInput: $input){
      Date
      TournamentName
      TournamentDir
    }
  }
`

export const GET_ARCHETYPES = gql`
  query Get_ArcheTypes{
    ArcheTypeName
  }
`
