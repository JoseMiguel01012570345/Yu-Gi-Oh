import { Response, PlayerInput, TournamentInput, DeckInput, ArchetypeInput, DeckResponse, PlayerResponse, ArcheTypeResponse, ArcheTypeCountResponse, ArcheTypeSearchDataResponse, DeckDataResponse, LocationSearchDataResponse, TournamentSearchDataResponse, UserSearchData, UserDataResponse } from './dto/create-manager.input';
import { ParticipateService } from '../participate/participate.service';
import { HaveweakService } from '../haveweak/haveweak.service';
import { ArchetypeService } from '../archetype/archetype.service';
import { PlayerService } from '../player/player.service';
import { DeckService } from '../deck/deck.service';
import { HaveService } from '../have/have.service';
import { BelongService } from '../belong/belong.service';
import { SuscribeService } from '../suscribe/suscribe.service';
import { TournamentService } from '../tournament/tournament.service';
import { MatchService } from '../match/match.service';
export declare class ManagerService {
    private readonly participateService;
    private readonly haveweakService;
    private readonly archetypeService;
    private readonly playerService;
    private readonly deckService;
    private readonly haveService;
    private readonly belongService;
    private readonly suscribeServcice;
    private readonly tournamentService;
    private readonly matchService;
    private participates;
    constructor(participateService: ParticipateService, haveweakService: HaveweakService, archetypeService: ArchetypeService, playerService: PlayerService, deckService: DeckService, haveService: HaveService, belongService: BelongService, suscribeServcice: SuscribeService, tournamentService: TournamentService, matchService: MatchService);
    private checkPlayersExists;
    createPlayersMatches(playersInput: PlayerInput[], tournamentInput: TournamentInput, round: number): Promise<Response>;
    checkArcheTypeExists(archetypes: ArchetypeInput[], archetype: ArchetypeInput): boolean;
    registOnePlayer(playerInput: PlayerInput, deckInput: DeckInput, archetypeInput: ArchetypeInput, tournamentInput: TournamentInput): Promise<Response>;
    getPlayersSuscribeToTournament(tournamentDate: number, tournamentName: string): Promise<import("../suscribe/entities/suscribe.entity").Suscribe[]>;
    getPlayersOrderedByDeckCount(): Promise<PlayerResponse[]>;
    getArcheTypesByDecksCount(): Promise<ArcheTypeResponse[]>;
    getTournamentWithArcheType(archetype: string): Promise<import("../tournament/entities/tournament.entity").Tournament>;
    getDecksByArcheType(archetype: string): Promise<DeckResponse[]>;
    getPlayerChampion(tournamentName: string, tournamentDate: number): Promise<import("../player/entities/player.entity").Player>;
    getPlayersMostWinnersInInterval(date1: number, date2: number): Promise<any[]>;
    getArcheTypeMostUsedInTournament(tournamentDate: number, tournamentName: any): Promise<import("../archetype/entities/archetype.entity").Archetype>;
    getCountArcheTypesChampiom(date1: number, date2: number): Promise<any[]>;
    getPlaceMostWinnerInInterval(date1: number, date2: number): Promise<{
        Place: string;
    }>;
    getArcheTypesMostUsedByTournamentAndRound(tournamentDate: number, tournamentName: string, round: number): Promise<ArcheTypeCountResponse[]>;
    getArcheTypesMostUsedByAtLeastOnePlayer(): Promise<ArcheTypeCountResponse[]>;
    getPlayersWithDeckOfArcheType(archetype: string): Promise<number>;
    getCountTournamentsWithArcheType(archetype: string): Promise<number>;
    getArcheTypeSearchData(archetype: string): Promise<ArcheTypeSearchDataResponse>;
    getArcheTypesSearchData(): Promise<any[]>;
    getDeckData(deckid: number): Promise<DeckDataResponse>;
    getAllDecksData(): Promise<any[]>;
    getArcheTypeMostPopularInLocation(location: string): Promise<any>;
    getLocationData(location: string): Promise<LocationSearchDataResponse>;
    mostPopularProvincia(provincia: string[]): Promise<string>;
    getAllLocationDataSearch(): Promise<any[]>;
    getTournamentData(date: number, name: string): Promise<TournamentSearchDataResponse>;
    getAllTournamentData(): Promise<any[]>;
    getUserSearchData(playerid: string): Promise<UserSearchData>;
    getAllUserSearchData(): Promise<any[]>;
    getUserdata(playerid: string): Promise<UserDataResponse>;
    getAllUserData(): Promise<any[]>;
}
