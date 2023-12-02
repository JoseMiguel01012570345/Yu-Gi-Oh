import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Archetype {

  @PrimaryGeneratedColumn('increment')
  @Field(() => String!, { description: "ArcheType's name" })
  ArcheTypeName: string;
}
