import { CreateSuscribeInput } from './create-suscribe.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { PrimaryColumn } from 'typeorm';

@InputType()
export class UpdateSuscribeInput extends PartialType(CreateSuscribeInput) {

  @PrimaryColumn('varchar',{length:50})
  PlayerID: string;

  @PrimaryColumn('int')
  DeckID: number;

  @PrimaryColumn('int')
  TournamentDate: number;

  @Field(() => String!, { description: "Tournament name" })
  TournamentName: string;

}
