import { gql } from 'apollo-angular';

export const GET_PLAYERS = gql
`query GetAllPlayers {
  players {
    PlayerName
    PlayerPassword
    Roll
  }
}`

export const CREATE_PLAYER = gql
`mutation CreatePlayer($playerName: String!, $playerPassword: String!, $roll: String!) {
  createPlayer(createPlayerInput: {
    PlayerName: $playerName,
    PlayerPassword: $playerPassword,
    Roll: $roll
  }) {
    PlayerName
    PlayerPassword
    Roll
  }
}
`
export const GET_USER_DATA = gql
`query GetUserData($playerName: String!) {
  userData(name: $playerName) {
    ID
    Decks {
      ID
      Attribute
    }
    Tournaments {
      TournamentDir
      Date
      TournamentName
    }
  }
}
`
export const GET_USER = gql
`query GetPlayerByName($playerID: String!) {
  player(id: $playerID) {
    PlayerName
    PlayerPassword
    Roll
  }
}
`

