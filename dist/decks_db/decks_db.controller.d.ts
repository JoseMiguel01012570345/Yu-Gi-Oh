import { DecksDbService } from './decks_db.service';
import { CreateDecksDbDto } from './dto/create-decks_db.dto';
import { UpdateDecksDbDto } from './dto/update-decks_db.dto';
export declare class DecksDbController {
    private readonly decksDbService;
    constructor(decksDbService: DecksDbService);
    create(createDecksDbDto: CreateDecksDbDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDecksDbDto: UpdateDecksDbDto): string;
    remove(id: string): string;
}
