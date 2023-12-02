import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
@ObjectType()
export class Player {
  @PrimaryGeneratedColumn('increment')
  @Field(() => String!, {description: "Player's name"})
  PlayerName: string;

  @Column('text')
  @Field(() => String!, { description: "Password's user"})
  PlayerPassword: string;
}
