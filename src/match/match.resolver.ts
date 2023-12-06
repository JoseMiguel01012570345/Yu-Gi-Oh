import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MatchService } from './match.service';
import { Match } from './entities/match.entity';
import { CreateMatchInput } from './dto/create-match.input';
import { UpdateMatchInput } from './dto/update-match.input';

@Resolver(() => Match)
export class MatchResolver {
  constructor(private readonly matchService: MatchService) { }

  @Mutation(() => Match)
  createMatch(@Args('createMatchInput') createMatchInput: CreateMatchInput) {
    return this.matchService.create(createMatchInput);
  }

  @Query(() => [Match], { name: 'matchs' })
  findAll() {
    return this.matchService.findAll();
  }

  @Query(() => Match, { name: 'match' })
  findOne(
    @Args('tournamentDate', { type: () => Int }) tournamentDate: number,
    @Args('tournamentName', { type: () => String! }) tournamentName: string,
    @Args('matchid', { type: () => Int! }) matchid: number
  ) {
    return this.matchService.findOne(tournamentDate, tournamentName, matchid);
  }

  @Query(() => [Match], { name: 'matchsByDate' })
  findMatchsByDate(@Args('date', { type: () => Int }) date: number) {
    return this.matchService.getMatchsByDate(date);
  }

  @Query(() => [Match], { name: 'matchsByTournamentName' })
  findMatchsByTournamentName(@Args('tournamentName', { type: () => String }) tournamentName: string) {
    return this.matchService.getMatchsByTournamentName(tournamentName);
  }

  @Query(() => [Match], { name: 'matchsByRoundsCount'})
  findMatchsByRoundsCount(@Args('rounds', { type: () => Int}) rounds: number) {
    return this.matchService.getMatchsByRoundsCount(rounds);
  }

  @Mutation(() => Match)
  updateMatch(@Args('updateMatchInput') updateMatchInput: UpdateMatchInput) {
    return this.matchService.update(updateMatchInput.TournamentDate, updateMatchInput.TournamentName, updateMatchInput.MatchID, updateMatchInput);
  }

  @Mutation(() => Match)
  removeMatch(
    @Args('tournamentDate', { type: () => Int }) tournamentDate: number,
    @Args('tournamentName', { type: () => String! }) tournamentName: string,
    @Args('matchid', { type: () => Int! }) matchid: number
  ) {
    return this.matchService.remove(tournamentDate, tournamentName, matchid);
  }
}
