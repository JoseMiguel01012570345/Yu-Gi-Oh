import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHasInput {
  @Field(() => Int!, { description: 'Player id' })
  PlayerID: number;

  @Field(() => Int!, { description:"Deck id"})
  DeckID: number;
}
