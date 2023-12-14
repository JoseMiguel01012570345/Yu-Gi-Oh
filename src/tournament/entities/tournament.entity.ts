import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
@ObjectType()
export class Tournament {
  @PrimaryColumn()
  @Field(() => Int!, { description: 'Date of tournament' })
  Date: number;

  @PrimaryColumn()
  @Field(() => String!, { description: "Tournament's name"})
  TournamentName: string;

  @Column('text')
  @Field(() => String!, { description: "Location of tournament"})
  TournamentDir: string;

  @Column('text')
  @Field(() => String!, { description: 'Municipio'})
  Municipio: string;

  @Column('text')
  @Field(() => String!, { description: 'Provincia'})
  Provincia: string;
}
