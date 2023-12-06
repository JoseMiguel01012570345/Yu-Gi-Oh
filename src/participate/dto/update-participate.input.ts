import { CreateParticipateInput } from './create-participate.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateParticipateInput extends PartialType(CreateParticipateInput) {

  @Field(() => String!, { description: "Player1's id" })
  PlayerOneID: string;

  @Field(() => String!, { description: "Player2's id" })
  PlayerTwoID: string;

  @Field(() => Int!, { description: "Match's id"})
  MatchID: number;

}
