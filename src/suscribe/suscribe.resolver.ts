import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SuscribeService } from './suscribe.service';
import { Suscribe } from './entities/suscribe.entity';
import { CreateSuscribeInput } from './dto/create-suscribe.input';
import { UpdateSuscribeInput } from './dto/update-suscribe.input';

@Resolver(() => Suscribe)
export class SuscribeResolver {
  
  constructor(private readonly suscribeService: SuscribeService) { }

  @Mutation(() => Suscribe)
  createSuscribe(@Args('createSuscribeInput') createSuscribeInput: CreateSuscribeInput) {
    return this.suscribeService.create(createSuscribeInput);
  }

  @Query(() => [Suscribe], { name: 'suscribes' })
  findAll() {
    return this.suscribeService.findAll();
  }

  @Query(() => Suscribe, { name: 'suscribe' })
  findOne(
    @Args('playerid', { type: () => String }) playerid: string,
    @Args('deckid', { type: () => Int }) deckid: number,
    @Args('tournamentDate', { type: () => Int }) tournamentDate: number,
    @Args('tournamentName', { type: () => String }) tournamentName
  ) {
    return this.suscribeService.findOne(playerid, deckid, tournamentDate, tournamentName);
  }

  @Mutation(() => Suscribe)
  updateSuscribe(@Args('updateSuscribeInput') updateSuscribeInput: UpdateSuscribeInput) {
    return this.suscribeService.update(updateSuscribeInput.PlayerID, updateSuscribeInput.DeckID, updateSuscribeInput.TournamentDate, updateSuscribeInput.TournamentName, updateSuscribeInput);
  }

  @Mutation(() => Suscribe)
  removeSuscribe(
    @Args('playerid', { type: () => String }) playerid: string,
    @Args('deckid', { type: () => Int }) deckid: number,
    @Args('tournamentDate', { type: () => Int }) tournamentDate: number,
    @Args('tournamentName', { type: () => String }) tournamentName: string
  ) {
    return this.suscribeService.remove(playerid, deckid, tournamentDate, tournamentName);
  }
}
