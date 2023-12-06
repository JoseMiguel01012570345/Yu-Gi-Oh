import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Has {
  @PrimaryColumn()
  @Field(() => String!, { description: 'Player id' })
  PlayerID: string;

  @PrimaryColumn()
  @Field(() => Int!, { description:"Deck id"})
  DeckID: number;
}
