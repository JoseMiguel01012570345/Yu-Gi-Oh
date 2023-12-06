import {gql } from 'apollo-angular'

export const GetDeck=gql`
  query Get_Decks
  decks{
    id
    name
    attribute
    user_id
  }

`
