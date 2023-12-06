import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ManagerService } from './manager.service';
import { Response, SuscribeResponse,PlayerInput, MatchInput, TournamentInput, DeckInput, ArchetypeInput } from './dto/create-manager.input';

@Resolver(() => Response)
export class ManagerResolver {
  constructor(private readonly managerService: ManagerService) { }

  @Mutation(() => Response)
  createParticipates(
    @Args('players', { type: () => [PlayerInput] }) playersInput: PlayerInput[],
    @Args('tournament', { type: () => TournamentInput }) tournamentInput: TournamentInput
  ) {
    return this.managerService.createPlayersMatches(playersInput,tournamentInput);
  }

  @Mutation(() => Response)
  registPlayer(
    @Args('player', { type: () => PlayerInput }) playerInput: PlayerInput,
    @Args('deck', { type: () => DeckInput }) deckInput: DeckInput,
    @Args('archetype', { type: () => ArchetypeInput }) archetypeInput: ArchetypeInput,
    @Args('tournament', { type: () => TournamentInput}) tournamentInput: TournamentInput
  ) {
    return this.managerService.registOnePlayer(playerInput, deckInput, archetypeInput, tournamentInput)
  }

  @Query(() => [SuscribeResponse], { name: 'playersInTournament'})
  findPlayersInTournament(
    @Args('tournamentDate', {type: () => Int}) tournamentDate: number,
    @Args('tournamentName', { type: () => String}) tournamentName: string
    ) {
      return this.managerService.getPlayersSuscribeToTournament(tournamentDate,tournamentName);
    }

}
