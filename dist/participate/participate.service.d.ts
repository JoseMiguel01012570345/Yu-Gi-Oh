import { CreateParticipateInput } from './dto/create-participate.input';
import { UpdateParticipateInput } from './dto/update-participate.input';
import { Participate } from './entities/participate.entity';
import { Repository } from 'typeorm';
export declare class ParticipateService {
    private participateRepository;
    constructor(participateRepository: Repository<Participate>);
    create(createParticipateInput: CreateParticipateInput): Promise<CreateParticipateInput>;
    findAll(): Promise<Participate[]>;
    findOne(player1id: string, player2id: string, matchid: number): Promise<Participate>;
    update(player1id: string, player2id: string, matchid: number, updateParticipateInput: UpdateParticipateInput): Promise<UpdateParticipateInput>;
    remove(player1id: string, player2id: string, matchid: number): Promise<Participate>;
}
