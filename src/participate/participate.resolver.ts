import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ParticipateService } from './participate.service';
import { Participate } from './entities/participate.entity';
import { CreateParticipateInput } from './dto/create-participate.input';
import { UpdateParticipateInput } from './dto/update-participate.input';

@Resolver(() => Participate)
export class ParticipateResolver {
  constructor(private readonly participateService: ParticipateService) { }

  @Mutation(() => Participate)
  createParticipate(@Args('createParticipateInput') createParticipateInput: CreateParticipateInput) {
    return this.participateService.create(createParticipateInput);
  }

  @Query(() => [Participate], { name: 'participates' })
  findAll() {
    return this.participateService.findAll();
  }

  @Query(() => Participate, { name: 'participate' })
  findOne(
    @Args('TournamentDate', { type: () => Int }) tournamentDate: number,
    @Args('TournamentName', { type: () => String }) tournamentName: string,
    @Args('MatchID', { type: () => Int }) matchid: number
  ) {
    return this.participateService.findOne(tournamentDate, tournamentName, matchid);
  }

  @Mutation(() => Participate)
  updateParticipate(@Args('updateParticipateInput') updateParticipateInput: UpdateParticipateInput) {
    return this.participateService.update(updateParticipateInput.TournamentDate, updateParticipateInput.TournamentName, updateParticipateInput.MatchID, updateParticipateInput);
  }

  @Mutation(() => Participate)
  removeParticipate(
    @Args('TournamentDate', { type: () => Int }) tournamentDate: number,
    @Args('TournamentName', { type: () => String }) tournamentName: string,
    @Args('MatchID', { type: () => Int }) matchid: number
  ) {
    return this.participateService.remove(tournamentDate, tournamentName, matchid);
  }
}
