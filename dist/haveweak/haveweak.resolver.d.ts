import { HaveweakService } from './haveweak.service';
import { Haveweak } from './entities/haveweak.entity';
import { CreateHaveweakInput } from './dto/create-haveweak.input';
import { UpdateHaveweakInput } from './dto/update-haveweak.input';
export declare class HaveweakResolver {
    private readonly haveweakService;
    constructor(haveweakService: HaveweakService);
    createHaveweak(createHaveweakInput: CreateHaveweakInput): Promise<CreateHaveweakInput>;
    findAll(): Promise<Haveweak[]>;
    findOne(tournamentDate: number, tournamentName: string, matchid: number): Promise<Haveweak>;
    updateHaveweak(updateHaveweakInput: UpdateHaveweakInput): Promise<UpdateHaveweakInput>;
    removeHaveweak(tournamentDate: number, tournamentName: string, matchid: number): Promise<Haveweak>;
}
