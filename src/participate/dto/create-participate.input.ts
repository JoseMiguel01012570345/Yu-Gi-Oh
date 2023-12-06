import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateParticipateInput {

  @Field(() => String!, { description: "Player1's id" })
  PlayerOneID: string;

  @Field(() => String!, { description: "Player2's id" })
  PlayerTwoID: string;

  @Field(() => Int!, { description: "Match's id"})
  MatchID: number;

}
