import { CreateMatchInput } from './dto/create-match.input';
import { UpdateMatchInput } from './dto/update-match.input';
import { Match } from './entities/match.entity';
import { Repository } from 'typeorm';
export declare class MatchService {
    private matchRepository;
    constructor(matchRepository: Repository<Match>);
    create(createMatchInput: CreateMatchInput): Promise<CreateMatchInput>;
    findAll(): Promise<Match[]>;
    findOne(tournamentDate: number, tournamentName: string, matchid: number): Promise<Match>;
    getMatchsByDate(date: number): Promise<Match[]>;
    getMatchsByTournamentName(name: string): Promise<Match[]>;
    getMatchsByRoundsCount(rounds: number): Promise<Match[]>;
    update(tournamentDate: number, tournamentName: string, matchid: number, updateMatchInput: UpdateMatchInput): Promise<UpdateMatchInput>;
    remove(tournamentDate: number, tournamentName: string, matchid: number): Promise<Match>;
}
