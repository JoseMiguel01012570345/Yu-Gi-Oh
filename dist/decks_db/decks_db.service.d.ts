import { CreateDecksDbDto } from './dto/create-decks_db.dto';
import { UpdateDecksDbDto } from './dto/update-decks_db.dto';
export declare class DecksDbService {
    create(createDecksDbDto: CreateDecksDbDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDecksDbDto: UpdateDecksDbDto): string;
    remove(id: number): string;
}
