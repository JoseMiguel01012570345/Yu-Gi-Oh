import { gql } from 'apollo-angular';

export const GET_PLAYERS = gql
`query GetAllPlayers {
  players {
    PlayerName
    PlayerPassword
    Roll
  }
}`
