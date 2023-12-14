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

  @Column('text')
  @Field(() => String!, { description: "User's roll"})
  Roll: string;

  @Column('text')
  @Field(() => String!, { description: 'Municipio'})
  Municipio: string;

  @Column('text')
  @Field(() => String!, { description: 'Provincia'})
  Provincia: string;

  @Column('numeric')
  @Field(() => Int, { description: 'Telefono'})
  Tel: number;

  @Column('text')
  @Field(() => String!, { description: 'Direccion'})
  Dir: string;
}
