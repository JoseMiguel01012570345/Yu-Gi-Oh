import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
@ObjectType()
export class Match {

  @PrimaryGeneratedColumn('increment')
  @Field(() => String!, { description: "Tournament's ID who this instance depends.\n Most have format (date)<-->name" })
  TournamentID: number;

  @Column('int')
  @Field(() => Int!, {description: "Match's id"})
  MatchID: number;

  @Column('int')
  @Field(() => Int!, { description: "Round"})
  Rounds: number;

  @Column('int')
  @Field(() => Int!, { description: "Player1's result in this match"})
  PlayerOneResult: number;

  @Column('int')
  @Field(() => Int!, { description: "Player2's result in this round"})
  PlayerTwoResult: number;

}
