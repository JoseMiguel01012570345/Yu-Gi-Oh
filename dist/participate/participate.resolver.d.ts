import { ParticipateService } from './participate.service';
import { Participate } from './entities/participate.entity';
import { CreateParticipateInput } from './dto/create-participate.input';
import { UpdateParticipateInput } from './dto/update-participate.input';
export declare class ParticipateResolver {
    private readonly participateService;
    constructor(participateService: ParticipateService);
    createParticipate(createParticipateInput: CreateParticipateInput): Promise<CreateParticipateInput>;
    findAll(): Promise<Participate[]>;
    findOne(tournamentDate: number, tournamentName: string, matchid: number): Promise<Participate>;
    updateParticipate(updateParticipateInput: UpdateParticipateInput): Promise<UpdateParticipateInput>;
    removeParticipate(tournamentDate: number, tournamentName: string, matchid: number): Promise<Participate>;
}
