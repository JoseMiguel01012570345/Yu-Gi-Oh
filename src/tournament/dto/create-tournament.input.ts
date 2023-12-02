import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTournamentInput {
  @Field(() => String!, { description: 'Date of tournament' })
  Date: string;

  @Field(() => String!, { description: "Tournament's name"})
  TournamentName: string;

  @Field(() => String!, { description: "Location of the tournament"})
  TournamentDir: string;
}
