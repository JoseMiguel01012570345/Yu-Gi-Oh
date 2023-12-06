import { CreateBelongInput } from './create-belong.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBelongInput extends PartialType(CreateBelongInput) {
  @Field(() => String!, { description: 'Archetype id' })
  ArcheTypeID: string;

  @Field(() => Int!, { description: "Deck id"})
  DeckID: number;
}
