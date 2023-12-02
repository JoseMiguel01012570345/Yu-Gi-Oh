import { CreateDeckInput } from './create-deck.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDeckInput extends PartialType(CreateDeckInput) {
  @Field(() => Int!)
  DeckID: number;

  @Field(() => String!, { description:"Deck name"})
  DeckName: string;

  @Field(() => Int, { description: "Main deck cards count"})
  MainDeckCount: number;

  @Field(() => Int!, { description: "Side deck cards count"})
  SideDeckCount: number;

  @Field(() => Int!, { description: "Extra deck cards count"})
  ExtraDeckCount: number;
}
