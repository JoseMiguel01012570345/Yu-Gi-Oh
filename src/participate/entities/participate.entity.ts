import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryColumn, Entity } from 'typeorm';

@Entity()
@ObjectType()
export class Participate {

  @PrimaryColumn()
  @Field(() => String!, { description: "Player1's id" })
  PlayerOneID: string;

  @PrimaryColumn()
  @Field(() => String!, { description: "Player2's id" })
  PlayerTwoID: string;

  @PrimaryColumn()
  @Field(() => Int!, { description: "Match's id"})
  MatchID: number;
}
