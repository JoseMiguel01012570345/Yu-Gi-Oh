import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
@ObjectType()
export class Has {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int!, { description: 'Player id' })
  PlayerID: number;

  @Column('int')
  @Field(() => Int!, { description:"Deck id"})
  DeckID: number;
}
