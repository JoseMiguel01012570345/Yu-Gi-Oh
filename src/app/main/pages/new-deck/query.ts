import {gql } from 'apollo-angular'

//esta es la interfaz de los arquetipos
export interface ArcheType {
  ArcheTypeName: string
}

export const GetDeck=gql`
  query Get_Decks
  decks{
    id
    name
    attribute
    user_id
  }
`

export const GET_ARCHETYPES = gql`
  query Get_ArcheTypes{
    ArcheTypeName
  }
`
