import { ManagerService } from './manager.service';
import { Response, PlayerInput, TournamentInput, DeckInput, ArchetypeInput } from './dto/create-manager.input';
export declare class ManagerResolver {
    private readonly managerService;
    constructor(managerService: ManagerService);
    createParticipates(playersInput: PlayerInput[], tournamentInput: TournamentInput): Promise<Response>;
    registPlayer(playerInput: PlayerInput, deckInput: DeckInput, archetypeInput: ArchetypeInput, tournamentInput: TournamentInput): Promise<Response>;
    findPlayersInTournament(tournamentDate: number, tournamentName: string): Promise<import("../suscribe/entities/suscribe.entity").Suscribe[]>;
}
