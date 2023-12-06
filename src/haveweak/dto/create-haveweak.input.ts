import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHaveweakInput {
  
  @Field(() => Int!, { description: "Tournament's date" })
  TournamentDate: number;

  @Field(() => String!, { description: " Tournament's name"})
  TournamentName: string;

  @Field(() => Int!, { description: " Match's id"})
  MatchID: number;

}
