import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryColumn, Entity } from 'typeorm';

@Entity()
@ObjectType()
export class Haveweak {

  @PrimaryColumn()
  @Field(() => Int!, { description: "Tournament's date" })
  TournamentDate: number;

  @PrimaryColumn()
  @Field(() => String!, { description: " Tournament's name"})
  TournamentName: string;

  @PrimaryColumn()
  @Field(() => Int!, { description: " Match's id"})
  MatchID: number;
}
