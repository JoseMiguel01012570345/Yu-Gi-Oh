import { CreateMatchInput } from './dto/create-match.input';
import { UpdateMatchInput } from './dto/update-match.input';
import { Match } from './entities/match.entity';
import { Repository } from 'typeorm';
export declare class MatchService {
    private matchRepository;
    constructor(matchRepository: Repository<Match>);
    create(createMatchInput: CreateMatchInput): Promise<CreateMatchInput>;
    findAll(): Promise<Match[]>;
    findOne(id: number): Promise<Match>;
    update(id: number, updateMatchInput: UpdateMatchInput): Promise<UpdateMatchInput>;
    remove(id: number): Promise<Match>;
}
