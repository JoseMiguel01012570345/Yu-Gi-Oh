import { CreateTournamentInput } from './create-tournament.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTournamentInput extends PartialType(CreateTournamentInput) {
  @Field(() => String!, {description: "Torunament Date. Most be a string with format \n(year)(mounth)(day)<-->(name) example 20200201<-->Pendulum"})
  TournamentID: string;

  @Field(() => String!, { description:"Location of tournament"})
  TournamentDir: string;
}
