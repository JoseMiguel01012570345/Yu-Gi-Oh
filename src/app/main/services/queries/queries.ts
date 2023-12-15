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
      Name
    }
    Tournaments {
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

export const CREATE_TOURNAMENT = gql
`mutation CreateTournament($Date: Int!, $TournamentName: String!, $Municipio: String!, $Provincia: String!) {
  createTournament(createTournamentInput: {
    Date: $Date,
    TournamentName: $TournamentName,
    Municipio: $Municipio,
    Provincia: $Provincia
  }) {
    Date
    TournamentName
    Municipio
    Provincia
  }
}`
export const GET_TOURNAMENT = gql
`
query FindTournament($tournamentDate: Int!, $tournamentName: String!) {
  tournament(tournamentDate: $tournamentDate, tournamentName: $tournamentName) {
    Date
    TournamentName
    Municipio
    Provincia
  }
}
`

export const GET_ARCH_LIST = gql
`query GetAllArchetypes {
  archetypes {
    ArcheTypeName
  }
}`

export const CREATE_DECK = gql`
  mutation CreateDeck($deckName: String!, $mainDeckCount: Int!, $sideDeckCount: Int!, $extraDeckCount: Int!) {
    createDeck(createDeckInput: {
      DeckName: $deckName,
      MainDeckCount: $mainDeckCount,
      SideDeckCount: $sideDeckCount,
      ExtraDeckCount: $extraDeckCount
    }) {
      Message
      deckID
    }
  }
`;

export const CREATE_BELONG = gql`
  mutation CreateBelong($archeTypeID: String!, $deckID: Int!) {
    createBelong(createBelongInput: {
      ArcheTypeID: $archeTypeID,
      DeckID: $deckID
    }) {
      ArcheTypeID
      DeckID
    }
  }
`;

export const CREATE_HAS = gql`
  mutation CreateHas($playerID: String!, $deckID: Int!) {
    createHas(createHasInput: {
      PlayerID: $playerID,
      DeckID: $deckID
    }) {
      PlayerID
      DeckID
    }
  }
`;
