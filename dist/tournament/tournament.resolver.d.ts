import { TournamentService } from './tournament.service';
import { Tournament } from './entities/tournament.entity';
import { CreateTournamentInput } from './dto/create-tournament.input';
import { UpdateTournamentInput } from './dto/update-tournament.input';
export declare class TournamentResolver {
    private readonly tournamentService;
    constructor(tournamentService: TournamentService);
    createTournament(createTournamentInput: CreateTournamentInput): Promise<CreateTournamentInput>;
    findAll(): Promise<Tournament[]>;
    findOne(id: string): Promise<Tournament>;
    updateTournament(updateTournamentInput: UpdateTournamentInput): Promise<UpdateTournamentInput>;
    removeTournament(id: string): Promise<Tournament>;
}
