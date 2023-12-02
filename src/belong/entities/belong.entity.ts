import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
@ObjectType()
export class Belong {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int!, { description: 'Archetype id' })
  ArcheTypeID: number;

  @Column('int')
  @Field(() => Int!, { description: "Deck id"})
  DeckID: number;
}
