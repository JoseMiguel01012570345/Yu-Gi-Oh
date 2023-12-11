import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryColumn, Entity, Column } from 'typeorm';

@Entity()
@ObjectType()
export class Participate {

  @PrimaryColumn()
  @Field(() => Int,{description:"Date of tournament"})
  TournamentDate: number;
  
  @PrimaryColumn()
  @Field(() => Int!, { description: "Match's id"})
  MatchID: number;

  @PrimaryColumn()
  @Field(() => String, { description: 'Name of tournament'})
  TournamentName: string;

  @Column('text')
  @Field(() => String!, { description: "Player1's id" })
  PlayerOneID: string;

  @Column('text')
  @Field(() => String!, { description: "Player2's id" })
  PlayerTwoID: string;

}
