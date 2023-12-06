import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BelongService } from './belong.service';
import { Belong } from './entities/belong.entity';
import { CreateBelongInput } from './dto/create-belong.input';
import { UpdateBelongInput } from './dto/update-belong.input';

@Resolver(() => Belong)
export class BelongResolver {
  constructor(private readonly belongService: BelongService) { }

  @Mutation(() => Belong)
  createBelong(@Args('createBelongInput') createBelongInput: CreateBelongInput) {
    return this.belongService.create(createBelongInput);
  }

  @Query(() => [Belong], { name: 'belongs' })
  findAll() {
    return this.belongService.findAll();
  }

  @Query(() => Belong, { name: 'belong' })
  findOne(
    @Args('deckid', { type: () => Int }) deckid: number,
    @Args('archetypeid', { type: () => String }) archetypeid: string
  ) {
    return this.belongService.findOne(deckid, archetypeid);
  }

  @Mutation(() => Belong)
  updateBelong(@Args('updateBelongInput') updateBelongInput: UpdateBelongInput) {
    return this.belongService.update( updateBelongInput.DeckID,updateBelongInput.ArcheTypeID, updateBelongInput);
  }

  @Mutation(() => Belong)
  removeBelong(
    @Args('deckid', { type: () => Int }) deckid: number,
    @Args('archetypeid', { type: () => String }) archetypeid: string
  ) {
    return this.belongService.remove(deckid, archetypeid);
  }
}
