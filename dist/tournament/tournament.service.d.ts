import { CreateTournamentInput } from './dto/create-tournament.input';
import { UpdateTournamentInput } from './dto/update-tournament.input';
import { Repository } from 'typeorm';
import { Tournament } from './entities/tournament.entity';
export declare class TournamentService {
    private tournamentRepository;
    constructor(tournamentRepository: Repository<Tournament>);
    create(createTournamentInput: CreateTournamentInput): Promise<CreateTournamentInput>;
    findAll(): Promise<Tournament[]>;
    findOne(date: number, name: string): Promise<Tournament>;
    getTournamentsByName(name: string): Promise<Tournament[]>;
    getTournamentsByDate(date: number): Promise<Tournament[]>;
    getTournamentsByMunicipio(location: string): Promise<Tournament[]>;
    getTournamentsByProvincia(location: string): Promise<Tournament[]>;
    update(date: number, name: string, updateTournamentInput: UpdateTournamentInput): Promise<UpdateTournamentInput>;
    remove(date: number, name: string): Promise<Tournament>;
}
