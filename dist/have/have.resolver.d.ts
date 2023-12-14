import { HaveService } from './have.service';
import { Has } from './entities/has.entity';
import { CreateHasInput } from './dto/create-has.input';
import { UpdateHasInput } from './dto/update-has.input';
export declare class HaveResolver {
    private readonly haveService;
    constructor(haveService: HaveService);
    createHas(createHasInput: CreateHasInput): Promise<CreateHasInput>;
    findAll(): Promise<Has[]>;
    findOne(deckid: number, playerid: string): Promise<Has>;
    findDecksByPlayer(playerid: string): Promise<Has[]>;
    updateHas(updateHasInput: UpdateHasInput): Promise<UpdateHasInput>;
    removeHas(deckid: number, playerid: string): Promise<Has>;
}
