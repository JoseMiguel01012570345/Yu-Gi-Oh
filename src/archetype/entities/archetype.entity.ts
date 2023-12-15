import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Archetype {

  @PrimaryColumn()
  @Field(() => String!, { description: "ArcheType's name" })
  
  ArcheTypeName: string;
}
