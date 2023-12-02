import { DeckService } from './deck.service';
import { Deck } from './entities/deck.entity';
import { CreateDeckInput } from './dto/create-deck.input';
import { UpdateDeckInput } from './dto/update-deck.input';
export declare class DeckResolver {
    private readonly deckService;
    constructor(deckService: DeckService);
    createDeck(createDeckInput: CreateDeckInput): Promise<CreateDeckInput>;
    findAll(): Promise<Deck[]>;
    findOne(id: number): Promise<Deck>;
    updateDeck(updateDeckInput: UpdateDeckInput): Promise<UpdateDeckInput>;
    removeDeck(id: number): Promise<Deck>;
}
