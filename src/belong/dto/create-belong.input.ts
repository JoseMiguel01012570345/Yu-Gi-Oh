import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBelongInput {

  @Field(() => Int!, { description: 'Archetype id' })
  ArcheTypeID: number;

  @Field(() => Int!, { description: "Deck id"})
  DeckID: number;
}
