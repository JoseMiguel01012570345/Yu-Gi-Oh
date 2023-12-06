import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HaveweakService } from './haveweak.service';
import { Haveweak } from './entities/haveweak.entity';
import { CreateHaveweakInput } from './dto/create-haveweak.input';
import { UpdateHaveweakInput } from './dto/update-haveweak.input';

@Resolver(() => Haveweak)
export class HaveweakResolver {
  constructor(private readonly haveweakService: HaveweakService) { }

  @Mutation(() => Haveweak)
  createHaveweak(@Args('createHaveweakInput') createHaveweakInput: CreateHaveweakInput) {
    return this.haveweakService.create(createHaveweakInput);
  }

  @Query(() => [Haveweak], { name: 'haveweaks' })
  findAll() {
    return this.haveweakService.findAll();
  }

  @Query(() => Haveweak, { name: 'haveweak' })
  findOne(
    @Args('tournamentDate', { type: () => Int }) tournamentDate: number,
    @Args('tournamentName', { type: () => String }) tournamentName: string,
    @Args('matchid', { type: () => Int }) matchid: number
  ) {
    return this.haveweakService.findOne(tournamentDate, tournamentName, matchid);
  }

  @Mutation(() => Haveweak)
  updateHaveweak(@Args('updateHaveweakInput') updateHaveweakInput: UpdateHaveweakInput) {
    return this.haveweakService.update(updateHaveweakInput.TournamentDate, updateHaveweakInput.TournamentName, updateHaveweakInput.MatchID, updateHaveweakInput);
  }

  @Mutation(() => Haveweak)
  removeHaveweak(
    @Args('tournamentDate', { type: () => Int }) tournamentDate: number,
    @Args('tournamentName', { type: () => String }) tournamentName: string,
    @Args('matchid', { type: () => Int }) matchid: number
  ) {
    return this.haveweakService.remove(tournamentDate, tournamentName, matchid);
  }
}
