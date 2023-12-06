import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
@ObjectType()
export class Match {

  @PrimaryColumn()
  @Field(() => Int!, { description: "Tournament's Date ID who this instance depends" })
  TournamentDate: number;

  @PrimaryColumn()
  @Field(() => String!, { description: "Tournamen's name ID" })
  TournamentName: string;

  @PrimaryColumn()
  @Field(() => Int!, { description: "Match's id" })
  MatchID: number;

  @Column('int')
  @Field(() => Int!, { description: "Round" })
  Rounds: number;

  @Column('int')
  @Field(() => Int!, { description: "Player1's result in this match" })
  PlayerOneResult: number;

  @Column('int')
  @Field(() => Int!, { description: "Player2's result in this round" })
  PlayerTwoResult: number;

}
