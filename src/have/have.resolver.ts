import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HaveService } from './have.service';
import { Has } from './entities/has.entity';
import { CreateHasInput } from './dto/create-has.input';
import { UpdateHasInput } from './dto/update-has.input';

@Resolver(() => Has)
export class HaveResolver {
  constructor(private readonly haveService: HaveService) {}

  @Mutation(() => Has)
  createHas(@Args('createHasInput') createHasInput: CreateHasInput) {
    return this.haveService.create(createHasInput);
  }

  @Query(() => [Has], { name: 'have' })
  findAll() {
    return this.haveService.findAll();
  }

  @Query(() => Has, { name: 'has' })
  findOne(
    @Args('deckid', { type: () => Int }) deckid: number,
    @Args('playerid', { type: () => Int }) playerid: string) {
    return this.haveService.findOne(deckid, playerid);
  }

  @Mutation(() => Has)
  updateHas(@Args('updateHasInput') updateHasInput: UpdateHasInput) {
    return this.haveService.update(updateHasInput.DeckID, updateHasInput.PlayerID, updateHasInput);
  }

  @Mutation(() => Has)
  removeHas(
    @Args('deckid', { type: () => Int }) deckid: number,
    @Args('playerid', { type: () => Int }) playerid: string
  ) {
    return this.haveService.remove(deckid, playerid);
  }
}
