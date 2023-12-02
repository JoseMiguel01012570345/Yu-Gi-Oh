import { CreateHasInput } from './dto/create-has.input';
import { UpdateHasInput } from './dto/update-has.input';
import { Has } from './entities/has.entity';
import { Repository } from 'typeorm';
export declare class HaveService {
    private hasRepository;
    constructor(hasRepository: Repository<Has>);
    create(createHasInput: CreateHasInput): Promise<CreateHasInput>;
    findAll(): Promise<Has[]>;
    findOne(id: string): Promise<Has>;
    update(deckid: number, playerid: number, updateHasInput: UpdateHasInput): Promise<UpdateHasInput>;
    remove(id: string): Promise<Has>;
}
