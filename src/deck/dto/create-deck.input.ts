import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDeckInput {
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
