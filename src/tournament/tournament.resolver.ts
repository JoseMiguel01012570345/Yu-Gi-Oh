import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TournamentService } from './tournament.service';
import { Tournament } from './entities/tournament.entity';
import { CreateTournamentInput } from './dto/create-tournament.input';
import { UpdateTournamentInput } from './dto/update-tournament.input';

@Resolver(() => Tournament)
export class TournamentResolver {
  constructor(private readonly tournamentService: TournamentService) {}

  @Mutation(() => Tournament)
  createTournament(@Args('createTournamentInput') createTournamentInput: CreateTournamentInput) {
    return this.tournamentService.create(createTournamentInput);
  }

  @Query(() => [Tournament], { name: 'tournaments' })
  findAll() {
    return this.tournamentService.findAll();
  }

  @Query(() => Tournament, { name: 'tournament', description: "id most have format date<-->name, example: 20201112<-->Pendulum" })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.tournamentService.findOne(id);
  }

  @Mutation(() => Tournament)
  updateTournament(@Args('updateTournamentInput') updateTournamentInput: UpdateTournamentInput) {
    return this.tournamentService.update(updateTournamentInput.TournamentID, updateTournamentInput);
  }

  @Mutation(() => Tournament)
  removeTournament(@Args('id', { type: () => String }) id: string) {
    return this.tournamentService.remove(id);
  }
}
