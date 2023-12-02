import { CreateHasInput } from './create-has.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHasInput extends PartialType(CreateHasInput) {
  @Field(() => Int!, { description: 'Player id' })
  PlayerID: number;

  @Field(() => Int!, { description:"Deck id"})
  DeckID: number;}
