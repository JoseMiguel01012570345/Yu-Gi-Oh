import { HaveService } from './have.service';
import { Has } from './entities/has.entity';
import { CreateHasInput } from './dto/create-has.input';
import { UpdateHasInput } from './dto/update-has.input';
export declare class HaveResolver {
    private readonly haveService;
    constructor(haveService: HaveService);
    createHas(createHasInput: CreateHasInput): Promise<CreateHasInput>;
    findAll(): Promise<Has[]>;
    findOne(id: string): Promise<Has>;
    updateHas(updateHasInput: UpdateHasInput): Promise<UpdateHasInput>;
    removeHas(id: string): Promise<Has>;
}
