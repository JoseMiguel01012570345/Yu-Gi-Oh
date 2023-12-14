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
`mutation CreatePlayer($PlayerName: String!, $PlayerPassword: String!, $Roll: String!, $Municipio: String!, $Provincia: String!, $Tel: Int!) {
  createPlayer(createPlayerInput: {
    PlayerName: $PlayerName,
    PlayerPassword: $PlayerPassword,
    Roll: $Roll,
    Municipio: $Municipio,
    Provincia: $Provincia,
    Tel: $Tel
  }) {
    PlayerName
    PlayerPassword
    Roll
    Municipio
    Provincia
    Tel
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

