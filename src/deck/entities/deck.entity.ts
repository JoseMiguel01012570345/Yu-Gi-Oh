import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
@ObjectType()
export class Deck {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int!, { description: 'Deck ID' })
  DeckID: number;

  @Column('text')
  @Field(() => String!, { description: "Deck's name" })
  DeckName: string;

  @Column('int')
  @Field(() => Int!, { description: "Main deck cards count"})
  MainDeckCount: number;

  @Column('int')
  @Field(() => Int!, { description: "Side deck cards count"})
  SideDeckCount: number;

  @Column('int')
  @Field(() => Int!, { description: "Extra deck cards count"})
  ExtraDeckCount: number;

}
