import { CreateSuscribeInput } from './create-suscribe.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSuscribeInput extends PartialType(CreateSuscribeInput) {

  @Field(() => String!, { description: 'Player id' })
  PlayerID: string;

  @Field(() => Int!, { description: "Deck id" })
  DeckID: number;

  @Field(() => Int!, { description: "Tournament date" })
  TournamentDate: number;

  @Field(() => String!, { description: "Tournament name" })
  TournamentName: string;}
