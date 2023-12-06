import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
@ObjectType()
export class Belong {
  @PrimaryColumn()
  @Field(() => String!, { description: 'Archetype id' })
  ArcheTypeID: string;

  @PrimaryColumn()
  @Field(() => Int!, { description: "Deck id"})
  DeckID: number;
}
