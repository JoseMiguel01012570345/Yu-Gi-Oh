import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSuscribeInput {

  @Field(() => Int!, { description: 'Player id' })
  PlayerID: number;

  @Field(() => Int!, { description: "Deck id" })
  DeckID: number;

  @Field(() => Int!, { description: "Tournament date" })
  TournamentDate: number;

  @Field(() => String!, { description: "Tournament name" })
  TournamentName: string;
}
