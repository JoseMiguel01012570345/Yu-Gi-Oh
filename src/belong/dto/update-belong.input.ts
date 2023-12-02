import { CreateBelongInput } from './create-belong.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBelongInput extends PartialType(CreateBelongInput) {
  @Field(() => Int!, { description: 'Archetype id' })
  ArcheTypeID: number;

  @Field(() => Int!, { description: "Deck id"})
  DeckID: number;
}
