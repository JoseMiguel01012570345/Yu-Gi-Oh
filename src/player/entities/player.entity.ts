import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryColumn, Column, ManyToMany } from 'typeorm';
import { Deck } from '../../deck/entities/deck.entity';

@Entity()
@ObjectType()
export class Player {
  @PrimaryColumn()
  @Field(() => String!, {description: "Player's name"})
  PlayerName: string;

  @Column('text')
  @Field(() => String!, { description: "Password's user"})
  PlayerPassword: string;

}
