import { CreateBelongInput } from './dto/create-belong.input';
import { UpdateBelongInput } from './dto/update-belong.input';
import { Repository } from 'typeorm';
import { Belong } from './entities/belong.entity';
export declare class BelongService {
    private belongRepository;
    constructor(belongRepository: Repository<Belong>);
    create(createBelongInput: CreateBelongInput): Promise<CreateBelongInput>;
    findAll(): Promise<Belong[]>;
    findOne(deckid: number, archetypeid: string): Promise<Belong>;
    getArchetypeOrderedByDecksCount(): Promise<any>;
    getDecksIDByArcheType(acrhetype: string): Promise<Belong[]>;
    getDecksCountByArcheType(archeType: string): Promise<number>;
    getArcheTypesByDeckID(deckid: number): Promise<Belong[]>;
    update(deckid: number, archetypeid: string, updateBelongInput: UpdateBelongInput): Promise<UpdateBelongInput>;
    remove(deckid: number, archetypeid: string): Promise<Belong>;
}
