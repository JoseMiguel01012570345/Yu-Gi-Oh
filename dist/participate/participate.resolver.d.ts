import { ParticipateService } from './participate.service';
import { Participate } from './entities/participate.entity';
import { CreateParticipateInput } from './dto/create-participate.input';
import { UpdateParticipateInput } from './dto/update-participate.input';
export declare class ParticipateResolver {
    private readonly participateService;
    constructor(participateService: ParticipateService);
    createParticipate(createParticipateInput: CreateParticipateInput): Promise<CreateParticipateInput>;
    findAll(): Promise<Participate[]>;
    findOne(player1id: string, player2id: string, matchid: number): Promise<Participate>;
    updateParticipate(updateParticipateInput: UpdateParticipateInput): Promise<UpdateParticipateInput>;
    removeParticipate(player1id: string, player2id: string, matchid: number): Promise<Participate>;
}
