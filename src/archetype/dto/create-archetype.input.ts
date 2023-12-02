import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateArchetypeInput {
  @Field(() => String!, { description: "ArcheType's name" })
  ArcheTypeName: string;
}
