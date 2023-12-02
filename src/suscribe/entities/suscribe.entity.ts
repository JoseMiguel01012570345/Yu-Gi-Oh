import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
@ObjectType()
export class Suscribe {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int!, { description: 'Player id' })
  PlayerID: number;

  @Column('int')
  @Field(() => Int!, { description: "Deck id" })
  DeckID: number;

  @Column('int')
  @Field(() => Int!, { description: "Tournament date" })
  TournamentDate: number;

  @Column('text')
  @Field(() => String!, { description: "Tournament name" })
  TournamentName: string;
}
