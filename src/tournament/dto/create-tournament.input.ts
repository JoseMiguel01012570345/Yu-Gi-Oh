import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTournamentInput {
  @Field(() => Int!, { description: 'Date of tournament' })
  Date: number;

  @Field(() => String!, { description: "Tournament's name"})
  TournamentName: string;

  @Field(() => String!, { description: "Location of the tournament"})
  TournamentDir: string;

  @Field(() => String!, { description: 'Municipio'})
  Municipio: string;

  @Field(() => String!, { description: 'Provincia'})
  Provincia: string;
}
