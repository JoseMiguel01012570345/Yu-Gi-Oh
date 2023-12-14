import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TournamentService } from './tournament.service';
import { Tournament } from './entities/tournament.entity';
import { CreateTournamentInput } from './dto/create-tournament.input';
import { UpdateTournamentInput } from './dto/update-tournament.input';

@Resolver(() => Tournament)
export class TournamentResolver {
  constructor(private readonly tournamentService: TournamentService) { }

  @Mutation(() => Tournament)
  createTournament(@Args('createTournamentInput') createTournamentInput: CreateTournamentInput) {
    console.log(createTournamentInput);
    return this.tournamentService.create(createTournamentInput);
  }

  @Query(() => [Tournament], { name: 'tournaments' })
  findAll() {
    return this.tournamentService.findAll();
  }

  @Query(() => Tournament, { name: 'tournament' })
  findOne(
    @Args('tournamentDate', { type: () => Int }) tournamentDate: number,
    @Args('tournamentName', { type: () => String }) tournamentName: string
  ) {
    return this.tournamentService.findOne(tournamentDate, tournamentName);
  }

  @Query(() => [Tournament], { name: 'tournamentsByName' })
  findTournamentsByName(@Args('name', { type: () => String }) name: string) {
    return this.tournamentService.getTournamentsByName(name);
  }

  @Query(() => [Tournament], { name: 'tournamentsByDate' })
  findTournamentsByDate(@Args('date', { type: () => Int }) date: number) {
    return this.tournamentService.getTournamentsByDate(date);
  }

  @Query(() => [Tournament], { name: 'tournamentsByLocation' })
  findTournamentsByMunicipio(@Args('Location', { type: () => String }) location: string) {
    return this.tournamentService.getTournamentsByMunicipio(location);
  }
  @Query(() => [Tournament], { name: 'tournamentsByLocation' })
  findTournamentsByProvincia(@Args('Location', { type: () => String }) location: string) {
    return this.tournamentService.getTournamentsByProvincia(location);
  }

  @Mutation(() => Tournament)
  updateTournament(@Args('updateTournamentInput') updateTournamentInput: UpdateTournamentInput) {
    return this.tournamentService.update(updateTournamentInput.TournamentDate, updateTournamentInput.TournamentName, updateTournamentInput);
  }

  @Mutation(() => Tournament)
  removeTournament(
    @Args('tournamentDate', { type: () => Int }) tournamentDate: number,
    @Args('tournamentName', { type: () => String }) tournamentName: string
  ) {
    return this.tournamentService.remove(tournamentDate, tournamentName);
  }
}
