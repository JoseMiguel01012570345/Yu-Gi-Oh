import { InputType, Int, Field } from '@nestjs/graphql';
import { PrimaryColumn } from 'typeorm';

@InputType()
export class CreateSuscribeInput {

  @PrimaryColumn('varchar',{length:50})
  PlayerID: string;

  @PrimaryColumn('int')
  DeckID: number;

  @PrimaryColumn('int')
  TournamentDate: number;

  @Field(() => String!, { description: "Tournament name" })
  TournamentName: string;
}
