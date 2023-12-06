import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBelongInput {

  @Field(() => String!, { description: 'Archetype id' })
  ArcheTypeID: string;

  @Field(() => Int!, { description: "Deck id"})
  DeckID: number;
}
