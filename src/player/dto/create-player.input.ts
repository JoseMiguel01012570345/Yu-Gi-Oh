import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePlayerInput {
  @Field(() => String!, {description: "Player's name"})
  PlayerName: string;

  @Field(() => String!, {description:"Password of player"})
  PlayerPassword: string;

  @Field(() => String!, { description: "User's roll"})
  Roll: string;
}
