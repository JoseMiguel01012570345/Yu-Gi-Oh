import { CreateArchetypeInput } from './dto/create-archetype.input';
import { UpdateArchetypeInput } from './dto/update-archetype.input';
import { Repository } from 'typeorm';
import { Archetype } from './entities/archetype.entity';
export declare class ArchetypeService {
    private archetypeRepository;
    constructor(archetypeRepository: Repository<Archetype>);
    create(createArchetypeInput: CreateArchetypeInput): Promise<CreateArchetypeInput>;
    findAll(): Promise<Archetype[]>;
    findOne(id: string): Promise<Archetype>;
    update(id: string, updateArchetypeInput: UpdateArchetypeInput): Promise<UpdateArchetypeInput>;
    remove(id: string): Promise<Archetype>;
}
