import { CreateTournamentInput } from './dto/create-tournament.input';
import { UpdateTournamentInput } from './dto/update-tournament.input';
import { Repository } from 'typeorm';
import { Tournament } from './entities/tournament.entity';
export declare class TournamentService {
    private tournamentRepository;
    constructor(tournamentRepository: Repository<Tournament>);
    create(createTournamentInput: CreateTournamentInput): Promise<CreateTournamentInput>;
    findAll(): Promise<Tournament[]>;
    findOne(id: string): Promise<Tournament>;
    update(id: string, updateTournamentInput: UpdateTournamentInput): Promise<UpdateTournamentInput>;
    remove(id: string): Promise<Tournament>;
}
