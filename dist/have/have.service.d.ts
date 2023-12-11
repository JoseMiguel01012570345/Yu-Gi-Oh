import { CreateHasInput } from './dto/create-has.input';
import { UpdateHasInput } from './dto/update-has.input';
import { Has } from './entities/has.entity';
import { Repository } from 'typeorm';
export declare class HaveService {
    private hasRepository;
    constructor(hasRepository: Repository<Has>);
    create(createHasInput: CreateHasInput): Promise<CreateHasInput>;
    findAll(): Promise<Has[]>;
    findOne(deckid: number, playerid: string): Promise<Has>;
    getDecksByPlayer(player: string): Promise<Has[]>;
    getPlayersByDeck(deckid: number): Promise<Has[]>;
    getPlayersOrderedByDeckCount(): Promise<any>;
    update(deckid: number, playerid: string, updateHasInput: UpdateHasInput): Promise<UpdateHasInput>;
    remove(deckid: number, playerid: string): Promise<Has>;
}
