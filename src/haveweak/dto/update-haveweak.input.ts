import { CreateHaveweakInput } from './create-haveweak.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHaveweakInput extends PartialType(CreateHaveweakInput) {

  @Field(() => Int!, { description: "Tournament's date" })
  TournamentDate: number;

  @Field(() => String!, { description: " Tournament's name"})
  TournamentName: string;

  @Field(() => Int!, { description: " Match's id"})
  MatchID: number;

}
