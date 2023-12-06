import { CreateHaveweakInput } from './dto/create-haveweak.input';
import { UpdateHaveweakInput } from './dto/update-haveweak.input';
import { Haveweak } from './entities/haveweak.entity';
import { Repository } from 'typeorm';
export declare class HaveweakService {
    private haveweakRepository;
    constructor(haveweakRepository: Repository<Haveweak>);
    create(createHaveweakInput: CreateHaveweakInput): Promise<CreateHaveweakInput>;
    findAll(): Promise<Haveweak[]>;
    findOne(tournamentDate: number, tournamentName: string, matchid: number): Promise<Haveweak>;
    update(tournamentDate: number, tournamentName: string, matchid: number, updateHaveweakInput: UpdateHaveweakInput): Promise<UpdateHaveweakInput>;
    remove(tournamentDate: number, tournamentName: string, matchid: number): Promise<Haveweak>;
}
