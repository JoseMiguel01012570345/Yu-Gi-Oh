import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BelongService } from './belong.service';
import { Belong } from './entities/belong.entity';
import { CreateBelongInput } from './dto/create-belong.input';
import { UpdateBelongInput } from './dto/update-belong.input';

@Resolver(() => Belong)
export class BelongResolver {
  constructor(private readonly belongService: BelongService) {}

  @Mutation(() => Belong)
  createBelong(@Args('createBelongInput') createBelongInput: CreateBelongInput) {
    return this.belongService.create(createBelongInput);
  }

  @Query(() => [Belong], { name: 'belongs' })
  findAll() {
    return this.belongService.findAll();
  }

  @Query(() => Belong, { name: 'belong' })
  findOne(@Args('id', { type: () => String , description: "Id most have format (deckid)<-->(archetypeid)"}) id: string) {
    return this.belongService.findOne(id);
  }

  @Mutation(() => Belong)
  updateBelong(@Args('updateBelongInput') updateBelongInput: UpdateBelongInput) {
    return this.belongService.update(updateBelongInput.ArcheTypeID, updateBelongInput.DeckID, updateBelongInput);
  }

  @Mutation(() => Belong)
  removeBelong(@Args('id', { type: () => String, description: "id most have format (deckid)<-->(archetypeid)" }) id: string) {
    return this.belongService.remove(id);
  }
}
