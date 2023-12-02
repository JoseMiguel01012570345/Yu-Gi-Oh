import { ArchetypeService } from './archetype.service';
import { Archetype } from './entities/archetype.entity';
import { CreateArchetypeInput } from './dto/create-archetype.input';
import { UpdateArchetypeInput } from './dto/update-archetype.input';
export declare class ArchetypeResolver {
    private readonly archetypeService;
    constructor(archetypeService: ArchetypeService);
    createArchetype(createArchetypeInput: CreateArchetypeInput): Promise<CreateArchetypeInput>;
    findAll(): Promise<Archetype[]>;
    findOne(id: string): Promise<Archetype>;
    updateArchetype(updateArchetypeInput: UpdateArchetypeInput): Promise<UpdateArchetypeInput>;
    removeArchetype(id: string): Promise<Archetype>;
}
