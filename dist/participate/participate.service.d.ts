import { CreateParticipateInput } from './dto/create-participate.input';
import { UpdateParticipateInput } from './dto/update-participate.input';
import { Participate } from './entities/participate.entity';
import { Repository } from 'typeorm';
export declare class ParticipateService {
    private participateRepository;
    constructor(participateRepository: Repository<Participate>);
    create(createParticipateInput: CreateParticipateInput): Promise<CreateParticipateInput>;
    findAll(): Promise<Participate[]>;
    findOne(tournamentDate: number, tournamentName: string, matchid: number): Promise<Participate>;
    getParticipatesByMatch(id: number): Promise<Participate[]>;
    getAllParticipatesByID(tournamentDate: number, tournamentName: string, matchid: number): Promise<Participate[]>;
    getParticipatesByTournament(tournamentDate: number, tournamentName: string): Promise<Participate[]>;
    update(tournamentDate: number, tournamentName: string, matchid: number, updateParticipateInput: UpdateParticipateInput): Promise<UpdateParticipateInput>;
    remove(tournamentDate: number, tournamentName: string, matchid: number): Promise<Participate>;
}
