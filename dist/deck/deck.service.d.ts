import { CreateDeckInput } from './dto/create-deck.input';
import { UpdateDeckInput } from './dto/update-deck.input';
import { Repository } from 'typeorm';
import { Deck } from './entities/deck.entity';
export declare class DeckService {
    private deckRepository;
    constructor(deckRepository: Repository<Deck>);
    create(createDeckInput: CreateDeckInput): Promise<CreateDeckInput>;
    findAll(): Promise<Deck[]>;
    findOne(id: number): Promise<Deck>;
    getDecksByName(name: string): Promise<Deck[]>;
    getDecksByMainDeckCount(count: number): Promise<Deck[]>;
    getDecksBySideDeckCount(count: number): Promise<Deck[]>;
    getDecksByExtraDeckCount(count: number): Promise<Deck[]>;
    update(id: number, updateDeckInput: UpdateDeckInput): Promise<UpdateDeckInput>;
    remove(id: number): Promise<Deck>;
}
