import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Suscribe {
  @PrimaryColumn()
  @Field(() => String!, { description: 'Player id' })
  PlayerID: string;

  @PrimaryColumn()
  @Field(() => Int!, { description: "Deck id" })
  DeckID: number;

  @PrimaryColumn()
  @Field(() => Int!, { description: "Tournament date" })
  TournamentDate: number;

  @PrimaryColumn()
  @Field(() => String!, { description: "Tournament name" })
  TournamentName: string;
}
