import { CreateHasInput } from './create-has.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHasInput extends PartialType(CreateHasInput) {
  @Field(() => String!, { description: 'Player id' })
  PlayerID: string;

  @Field(() => Int!, { description: "Deck id" })
  DeckID: number;
}
