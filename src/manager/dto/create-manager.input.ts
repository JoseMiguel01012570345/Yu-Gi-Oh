import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Response {

  @Field(() => String, { description: "status" })
  Status: string;

  @Field(() => String, { description: "message" })
  Message: string;

}

@ObjectType()
export class DeckDataResponse {
  @Field(() => Int, { description: 'Deck id' })
  ID: number;

  @Field(() => String, { description: 'Deck name' })
  Name: string;

  @Field(() => String, { description: 'Deck archetype' })
  Attribute: string;

  @Field(() => [String], { description: 'User id' })
  UsersId: string[];
}

@ObjectType()
export class TournamentSearchDataResponse {

  @Field(() => String, { description: "Tournament's name" })
  TournamentName: string;

  @Field(() => String, { description: "Location" })
  Location: string;

  @Field(() => Int, { description: "Tournament's date" })
  TournamentDate: number;

  @Field(() => String, { description: "ArcheType most used during the tournament" })
  ArcheTypeMostUsed: string;

  @Field(() => String, { description: "Tournament's winner" })
  Winner: string;
}

@ObjectType()
export class UserSearchData {
  @Field(() => String, { description: "Player's name" })
  Name: string;

  @Field(() => Int, { description: 'Decks count' })
  DecksCount: number;

  @Field(() => Int, { description: 'Tournaments count where he partipated' })
  Participations: number;

  @Field(() => Int, { description: 'Tournaments wher he has winned' })
  WinnsCount: number;
}

@ObjectType()
export class UserDataResponse {
  @Field(() => String, { description: 'playername'})
  ID: string;

  @Field(() => [TournamentResponse], { description: 'Tournaments where player has participated'})
  Tournaments: TournamentResponse[];

  @Field(() => [DeckDataResponse], { description: 'player decks'})
  Decks: DeckDataResponse[];
}

@ObjectType()
export class LocationSearchDataResponse {
  @Field(() => String, { description: 'Location' })
  Location: string;

  @Field(() => String, { description: 'ArcheType most popular' })
  ArcheTypeMostMopular: string;

  @Field(() => Int, { description: 'players count in this location' })
  PlayersCount: number;

  @Field(() => Int, { description: 'Players winners count' })
  WinnersCount: number;
}

@ObjectType()
export class ArcheTypeSearchDataResponse {
  @Field(() => String, { description: 'archetype name' })
  ArcheTypeName: string;

  @Field(() => String, { description: 'most popular location' })
  MostPopularRegion: string;

  @Field(() => Int, { description: 'players using it' })
  PlayersCount: number;

  @Field(() => Int, { description: 'tournaments where it was used' })
  TournamentsCount: number;
}

@ObjectType()
export class ArcheTypeResponse {
  @Field(() => String, { description: 'ArcheType name id' })
  ArcheTypeName: string;
}

@ObjectType()
export class TournamentResponse {
  @Field(() => Int, { description: 'Date of tournament' })
  Date: number;

  @Field(() => String, { description: 'Name of tournament' })
  TournamentName: string;

  @Field(() => String, { description: 'Location of tournament' })
  TournamentDir: string;
}

@ObjectType()
export class ArcheTypeCountResponse {
  @Field(() => String, { description: 'Acrhetype id' })
  ArcheTypeName: string;

  @Field(() => Int, { description: 'Count of the archetype winner' })
  Count: number;
}

@ObjectType()
export class PlaceResponse {
  @Field(() => String, { description: 'The place result of the search' })
  Place: string;
}

@ObjectType()
export class HasResponse {
  @Field(() => String, { description: 'Player id' })
  PlayerID: string;

  @Field(() => Int, { description: 'Deck id' })
  DeckID: number;
}

@ObjectType()
export class PlayerResponse {
  @Field(() => String, { description: 'Player id' })
  PlayerName: string;

  @Field(() => String, { description: 'Player password' })
  PlayerPassword: string;
}

@ObjectType()
export class SuscribeResponse {
  @Field(() => String!, { description: 'Player id' })
  PlayerID: string;

  @Field(() => Int!, { description: "Deck id" })
  DeckID: number;

  @Field(() => Int!, { description: "Tournament date" })
  TournamentDate: number;

  @Field(() => String!, { description: "Tournament name" })
  TournamentName: string;
}

@ObjectType()
export class BelongResponse {
  @Field(() => String!, { description: 'Archetype id' })
  ArcheTypeID: string;

  @Field(() => Int!, { description: "Deck id" })
  DeckID: number;
}

@ObjectType()
export class DeckResponse {
  @Field(() => Int, { description: 'Deck ID' })
  DeckID: number;

  @Field(() => String!, { description: "Deck's name" })
  DeckName: string;

  @Field(() => Int!, { description: "Main deck cards count" })
  MainDeckCount: number;

  @Field(() => Int, { description: "Side deck cards count" })
  SideDeckCount: number;

  @Field(() => Int, { description: "Extra deck cards count" })
  ExtraDeckCount: number;
}

@InputType()
export class PlayerInput {
  @Field(() => String!, { description: "Players id" })
  PlayerName: string;

  @Field(() => String!, { description: "Player password" })
  PlayerPassword: string;

  @Field(() => String!, { description: "Usre's roll"})
  Roll: string;

  @Field(() => String!, { description: 'Municipio'})
  Municipio: string;

  @Field(() => String!, { description: 'Provincia'})
  Provincia: string;

  @Field(() => Int, { description: 'Telefono'})
  Tel: number;

  @Field(() => String!, { description: 'Direccion'})
  Dir: string;
}

@InputType()
export class MatchInput {
  @Field(() => Int!, { description: "Match id" })
  MatchID: number;
}

@InputType()
export class TournamentInput {
  @Field(() => Int!, { description: "Tournament date" })
  TournamentDate: number;

  @Field(() => String!, { description: "Tournament name" })
  TournamentName: string;
}

@InputType()
export class DeckInput {
  @Field(() => Int, { description: 'Deck ID' })
  DeckID: number;

  @Field(() => String!, { description: "Deck's name" })
  DeckName: string;

  @Field(() => Int!, { description: "Main deck cards count" })
  MainDeckCount: number;

  @Field(() => Int, { description: "Side deck cards count" })
  SideDeckCount: number;

  @Field(() => Int, { description: "Extra deck cards count" })
  ExtraDeckCount: number;
}

@InputType()
export class ArchetypeInput {
  @Field(() => String!, { description: "ArcheType's name" })
  ArcheTypeName: string;
}