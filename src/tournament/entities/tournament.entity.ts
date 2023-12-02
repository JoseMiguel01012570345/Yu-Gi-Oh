import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
@ObjectType()
export class Tournament {
  @PrimaryGeneratedColumn('increment')
  @Field(() => String!, { description: 'Date of tournament' })
  Date: string;

  @Column()
  @Field(() => String!, { description: "Tournament's name"})
  TournamentName: string;

  @Column('text')
  @Field(() => String!, { description: "Location of tournament"})
  TournamentDir: string;
}
