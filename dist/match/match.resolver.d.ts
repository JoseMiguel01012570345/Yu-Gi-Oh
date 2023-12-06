import { MatchService } from './match.service';
import { Match } from './entities/match.entity';
import { CreateMatchInput } from './dto/create-match.input';
import { UpdateMatchInput } from './dto/update-match.input';
export declare class MatchResolver {
    private readonly matchService;
    constructor(matchService: MatchService);
    createMatch(createMatchInput: CreateMatchInput): Promise<CreateMatchInput>;
    findAll(): Promise<Match[]>;
    findOne(tournamentDate: number, tournamentName: string, matchid: number): Promise<Match>;
    findMatchsByDate(date: number): Promise<Match[]>;
    findMatchsByTournamentName(tournamentName: string): Promise<Match[]>;
    findMatchsByRoundsCount(rounds: number): Promise<Match[]>;
    updateMatch(updateMatchInput: UpdateMatchInput): Promise<UpdateMatchInput>;
    removeMatch(tournamentDate: number, tournamentName: string, matchid: number): Promise<Match>;
}
