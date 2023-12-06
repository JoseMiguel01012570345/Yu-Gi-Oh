import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMatchInput {

  @Field(() => Int!, { description: "Tournament's ID who this instance depends" })
  TournamentDate: number;

  @Field(() => String, { description: "Tournament's name"})
  TournamentName: string;

  @Field(() => Int!, {description: "Match's id"})
  MatchID: number;

  @Field(() => Int!, { description: "Round"})
  Rounds: number;

  @Field(() => Int!, { description: "Player1's result in this match"})
  PlayerOneResult: number;

  @Field(() => Int!, { description: "Player2's result in this round"})
  PlayerTwoResult: number;

}
