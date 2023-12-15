import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';

@InputType()
export class CreateDeckInput {
  @Field(() => String!, { description: "Deck's name" })
  DeckName: string;

  @Field(() => Int!, { description: "Main deck cards count" })
  MainDeckCount: number;

  @Field(() => Int, { description: "Side deck cards count" })
  SideDeckCount: number;

  @Field(() => Int, { description: "Extra deck cards count" })
  ExtraDeckCount: number;

}

@ObjectType()
export class CreateDeckResponse {
  @Field(() => String, { description: 'Status of the result of the operation'})
  Message: string;
  
  @Field(() => Number, { description: 'deck id'})
  deckID: number;
}