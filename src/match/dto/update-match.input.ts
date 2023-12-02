import { CreateMatchInput } from './create-match.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMatchInput extends PartialType(CreateMatchInput) {
  
  @Field(() => String!, { description: "Tournament's ID who this instance depends.\n Most have format (date)<-->name" })
  TournamentID: number;

  @Field(() => Int!, {description: "Match's id"})
  MatchID: number;

  @Field(() => Int!, { description: "Round"})
  Rounds: number;

  @Field(() => Int!, { description: "Player1's result in this match"})
  PlayerOneResult: number;

  @Field(() => Int!, { description: "Player2's result in this round"})
  PlayerTwoResult: number;

}
