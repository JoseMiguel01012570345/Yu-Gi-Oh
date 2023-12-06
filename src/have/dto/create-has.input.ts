import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHasInput {
  @Field(() => String!, { description: 'Player id' })
  PlayerID: string;

  @Field(() => Int!, { description:"Deck id"})
  DeckID: number;
}
