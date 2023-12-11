import { CreatePlayerInput } from './create-player.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePlayerInput extends PartialType(CreatePlayerInput) {
  @Field(() => String!, { description: "Player's new name" })
  PlayerName: string;

  @Field(() => String!, { description: "Players's password"})
  PlayerPassword: string;

  @Field(() => String!, { description:"User's roll"})
  Roll: string;
}
