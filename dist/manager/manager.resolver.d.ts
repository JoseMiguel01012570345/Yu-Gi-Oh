import { ManagerService } from './manager.service';
import { ArcheTypeSearchDataResponse, Response, PlayerInput, TournamentInput, DeckInput, ArchetypeInput, DeckResponse, PlayerResponse, ArcheTypeResponse, ArcheTypeCountResponse, DeckDataResponse, LocationSearchDataResponse, TournamentSearchDataResponse, UserSearchData, UserDataResponse } from './dto/create-manager.input';
import { Match } from 'src/match/entities/match.entity';
import { CreateMatchInput } from 'src/match/dto/create-match.input';
export declare class ManagerResolver {
    private readonly managerService;
    constructor(managerService: ManagerService);
    createParticipates(start: boolean, matchsInput: CreateMatchInput[], tournamentInput: TournamentInput, round: number): Promise<Match[] | Response>;
    registPlayer(playerInput: PlayerInput, deckInput: DeckInput, archetypeInput: ArchetypeInput, tournamentInput: TournamentInput): Promise<Response>;
    findPlayersInTournament(tournamentDate: number, tournamentName: string): Promise<import("../suscribe/entities/suscribe.entity").Suscribe[]>;
    findPlayersOrderedByDeckCount(): Promise<PlayerResponse[]>;
    findArcheTypesByDecksCount(): Promise<ArcheTypeResponse[]>;
    findDecksByArcheType(archetype: string): Promise<DeckResponse[]>;
    findTournamentByArcheTypeMostUsed(archetype: string): Promise<import("../tournament/entities/tournament.entity").Tournament>;
    findTournamentChampiom(tournamentName: string, tournamentDate: number): Promise<import("../player/entities/player.entity").Player>;
    findPlayersOrderByResultsBettwenDates(date1: number, date2: number): Promise<any[]>;
    findArcheTypeMostUsedInTournament(tournamentDate: any, tournamentName: any): Promise<import("../archetype/entities/archetype.entity").Archetype>;
    countWinnsByArcheTypesDecks(date1: number, date2: number): Promise<any[]>;
    findPlaceMostWinner(date1: number, date2: number): Promise<{
        Place: string;
    }>;
    findAcrheTypeCountInTournamentAndRound(date: number, name: string, round: number): Promise<ArcheTypeCountResponse[]>;
    findArcheTypesMostUsedByAtLeastOnePlayer(): Promise<ArcheTypeCountResponse[]>;
    searchArcheTypeData(archetype: string): Promise<ArcheTypeSearchDataResponse>;
    searchArcheTypesData(): Promise<any[]>;
    searchDeckData(deckid: number): Promise<DeckDataResponse>;
    searchDecksData(): Promise<any[]>;
    searchLocationData(location: string): Promise<LocationSearchDataResponse>;
    searchAllLocationsData(): Promise<any[]>;
    searchTournamentData(date: number, name: string): Promise<TournamentSearchDataResponse>;
    searchTournamentsData(): Promise<any[]>;
    searchUserData(name: string): Promise<UserSearchData>;
    searchAllUsersData(): Promise<any[]>;
    findUserData(name: string): Promise<UserDataResponse>;
    findAllUsersData(): Promise<any[]>;
}
