import { CreateTournamentInput } from './create-tournament.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTournamentInput extends PartialType(CreateTournamentInput) {
  @Field(() => Int!, {description: "Tournament Date. Most be a string with format \n(year)(mounth)(day)"})
  TournamentDate: number;

  @Field(() => String!, { description: "Tournament's name"})
  TournamentName: string;

  @Field(() => String!, { description:"Location of tournament"})
  TournamentDir: string;

  @Field(() => String!, { description: 'Municipio'})
  Municipio: string;

  @Field(() => String!, { description: 'Provincia'})
  Provincia: string;
}
