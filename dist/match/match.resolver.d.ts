import { MatchService } from './match.service';
import { Match } from './entities/match.entity';
import { CreateMatchInput } from './dto/create-match.input';
import { UpdateMatchInput } from './dto/update-match.input';
export declare class MatchResolver {
    private readonly matchService;
    constructor(matchService: MatchService);
    createMatch(createMatchInput: CreateMatchInput): Promise<CreateMatchInput>;
    findAll(): Promise<Match[]>;
    findOne(id: number): Promise<Match>;
    updateMatch(updateMatchInput: UpdateMatchInput): Promise<UpdateMatchInput>;
    removeMatch(id: number): Promise<Match>;
}
