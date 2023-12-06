import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Response {

  @Field(() => String, { description: "status" })
  Status: string;

  @Field(() => String, { description: "message" })
  Message: string;

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

  @Field(() => Int!, { description: "Deck id"})
  DeckID: number;
}

@InputType()
export class PlayerInput {
  @Field(() => String!, { description: "Players id"})
  PlayerName: string;

  @Field(() => String!, { description: "Player password"})
  PlayerPassword: string;
}

@InputType()
export class MatchInput {
  @Field(() => Int!, { description: "Match id"})
  MatchID: number;
}

@InputType()
export class TournamentInput {
  @Field(() => Int!, { description: "Tournament date"})
  TournamentDate: number;

  @Field(() => String!, { description: "Tournament name"})
  TournamentName: string;
}

@InputType()
@ObjectType()
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