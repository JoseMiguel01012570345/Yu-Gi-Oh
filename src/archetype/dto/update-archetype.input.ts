import { CreateArchetypeInput } from './create-archetype.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateArchetypeInput extends PartialType(CreateArchetypeInput) {
  @Field(() => String!)
  ArcheTypeName: string;
}
