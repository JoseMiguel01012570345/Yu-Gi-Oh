import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ManagerService } from './manager.service';
import { ArcheTypeSearchDataResponse, Response, SuscribeResponse, PlayerInput, MatchInput, TournamentInput, DeckInput, ArchetypeInput, DeckResponse, PlayerResponse, ArcheTypeResponse, TournamentResponse, ArcheTypeCountResponse, PlaceResponse, DeckDataResponse, LocationSearchDataResponse, TournamentSearchDataResponse, UserSearchData, UserDataResponse } from './dto/create-manager.input';
import { Match } from 'src/match/entities/match.entity';
import { CreateMatchInput } from 'src/match/dto/create-match.input';
import { start } from 'repl';

@Resolver(() => Response)
export class ManagerResolver {
  constructor(private readonly managerService: ManagerService) { }

  @Mutation(() => Response)
  createParticipates(
    @Args('start', { type: () => Boolean }) start: boolean,
    @Args('players', { type: () => [] }) matchsInput: CreateMatchInput[],
    @Args('tournament', { type: () => TournamentInput }) tournamentInput: TournamentInput,
    @Args('round', { type: () => Int }) round: number
  ) {

    let playersInput=[]

     for(let match of matchsInput){

      if(match.PlayerOneResult<match.PlayerTwoResult)
        playersInput.push(match.PlayerTwoResult)
      
        else playersInput.push(match.PlayerOneResult)
     }

     if(start==true)
      return this.managerService.createPlayersMatchesStart(playersInput, tournamentInput);
     
      else{

      }
    }

  @Mutation(() => Response, { name: 'registPlayer' })
  registPlayer(
    @Args('player', { type: () => PlayerInput }) playerInput: PlayerInput,
    @Args('deck', { type: () => DeckInput }) deckInput: DeckInput,
    @Args('archetype', { type: () => ArchetypeInput }) archetypeInput: ArchetypeInput,
    @Args('tournament', { type: () => TournamentInput }) tournamentInput: TournamentInput
  ) {
    return this.managerService.registOnePlayer(playerInput, deckInput, archetypeInput, tournamentInput)
  }

  @Query(() => [SuscribeResponse], { name: 'playersInTournament' })
  findPlayersInTournament(
    @Args('tournamentDate', { type: () => Int }) tournamentDate: number,
    @Args('tournamentName', { type: () => String }) tournamentName: string
  ) {
    return this.managerService.getPlayersSuscribeToTournament(tournamentDate, tournamentName);
  }

  @Query(() => [PlayerResponse], { name: 'playersByDeckCount' })
  findPlayersOrderedByDeckCount() {
    return this.managerService.getPlayersOrderedByDeckCount();
  }

  @Query(() => [ArcheTypeResponse], { name: 'archetypesByDecksCount' })
  findArcheTypesByDecksCount() {
    return this.managerService.getArcheTypesByDecksCount();
  }

  @Query(() => [DeckResponse], { name: 'decksByArhcetype' })
  findDecksByArcheType(@Args('archetype', { type: () => String }) archetype: string) {
    return this.managerService.getDecksByArcheType(archetype);
  }

  @Query(() => TournamentResponse, { name: 'tournamentByArcheTypeMostUsed' })
  findTournamentByArcheTypeMostUsed(@Args('archetype', { type: () => String }) archetype: string) {
    return this.managerService.getTournamentWithArcheType(archetype);
  }

  @Query(() => PlayerResponse, { name: 'tournamentChampiom' })
  findTournamentChampiom(
    @Args('tournamentName', { type: () => String }) tournamentName: string,
    @Args('tournamentDate', { type: () => Int }) tournamentDate: number
  ) {
    return this.managerService.getPlayerChampion(tournamentName, tournamentDate);
  }

  @Query(() => [PlayerResponse], { name: 'playersOrderByResultsBettwenDates' })
  findPlayersOrderByResultsBettwenDates(
    @Args('date1', { type: () => Int }) date1: number,
    @Args('date2', { type: () => Int }) date2: number
  ) {
    return this.managerService.getPlayersMostWinnersInInterval(date1, date2);
  }

  @Query(() => ArcheTypeResponse, { name: 'archeTypeMostUsedInTournament' })
  findArcheTypeMostUsedInTournament(
    @Args('tournamentDate', { type: () => Int }) tournamentDate,
    @Args('tournamentName', { type: () => String }) tournamentName
  ) {
    return this.managerService.getArcheTypeMostUsedInTournament(tournamentDate, tournamentName);
  }

  @Query(() => [ArcheTypeCountResponse], { name: 'countByArcheTypeWinner' })
  countWinnsByArcheTypesDecks(
    @Args('date1', { type: () => Int }) date1: number,
    @Args('date2', { type: () => Int }) date2: number
  ) {
    return this.managerService.getCountArcheTypesChampiom(date1, date2);
  }

  @Query(() => PlaceResponse, { name: 'placeMostWinner' })
  findPlaceMostWinner(
    @Args('date1', { type: () => Int }) date1: number,
    @Args('date2', { type: () => Int }) date2: number
  ) {
    return this.managerService.getPlaceMostWinnerInInterval(date1, date2);
  }

  @Query(() => [ArcheTypeCountResponse], { name: 'archetypeMostUsedInTournamentAndRound' })
  findAcrheTypeCountInTournamentAndRound(
    @Args('tournamentDate', { type: () => Int }) date: number,
    @Args('tournamentName', { type: () => String }) name: string,
    @Args('round', { type: () => Int }) round: number
  ) {
    return this.managerService.getArcheTypesMostUsedByTournamentAndRound(date, name, round);
  }

  @Query(() => [ArcheTypeCountResponse], { name: 'archeTypeMostUsedAtLeastByOnePlayer' })
  findArcheTypesMostUsedByAtLeastOnePlayer() {
    return this.managerService.getArcheTypesMostUsedByAtLeastOnePlayer();
  }

  @Query(() => ArcheTypeSearchDataResponse, { name: 'ArcheTypeSearchData' })
  searchArcheTypeData(
    @Args('archetype', { type: () => String }) archetype: string
  ) {
    return this.managerService.getArcheTypeSearchData(archetype);
  }

  @Query(() => [ArcheTypeSearchDataResponse], { name: 'ArcheTypesSearchData' })
  searchArcheTypesData() {
    return this.managerService.getArcheTypesSearchData();
  }

  @Query(() => DeckDataResponse, { name: 'deckData' })
  searchDeckData(
    @Args('deckid', { type: () => Int }) deckid: number
  ) {
    return this.managerService.getDeckData(deckid);
  }

  @Query(() => [DeckDataResponse], { name: 'decksData' })
  searchDecksData() {
    return this.managerService.getAllDecksData();
  }

  @Query(() => LocationSearchDataResponse, { name: 'locationData' })
  searchLocationData(
    @Args('location', { type: () => String }) location: string
  ) {
    return this.managerService.getLocationData(location);
  }

  @Query(() => [LocationSearchDataResponse], { name: 'locationsData' })
  searchAllLocationsData() {
    return this.managerService.getAllLocationDataSearch();
  }

  @Query(() => TournamentSearchDataResponse, { name: 'tournamentData' })
  searchTournamentData(
    @Args('date', { type: () => Int }) date: number,
    @Args('name', { type: () => String }) name: string
  ) {
    return this.managerService.getTournamentData(date, name);
  }

  @Query(() => [TournamentSearchDataResponse], { name: 'tournamentsData' })
  searchTournamentsData() {
    return this.managerService.getAllTournamentData();
  }

  @Query(() => UserSearchData, { name: 'userSearchData' })
  searchUserData(
    @Args('name', { type: () => String }) name: string
  ) {
    return this.managerService.getUserSearchData(name);
  }

  @Query(() => [UserSearchData], { name: 'usersSearchData'})
  searchAllUsersData() {
    return this.managerService.getAllUserSearchData();
  }

  @Query(() => UserDataResponse, { name: 'userData'})
  findUserData(
    @Args('name', { type: () => String}) name: string
  ) {
    return this.managerService.getUserdata(name);
  }

  @Query(() => [UserDataResponse], { name: 'usersData'})
  findAllUsersData() {
    return this.managerService.getAllUserData();
  }

}
