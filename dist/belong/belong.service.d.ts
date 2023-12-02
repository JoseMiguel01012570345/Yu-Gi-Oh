import { CreateBelongInput } from './dto/create-belong.input';
import { UpdateBelongInput } from './dto/update-belong.input';
import { Repository } from 'typeorm';
import { Belong } from './entities/belong.entity';
export declare class BelongService {
    private belongRepository;
    constructor(belongRepository: Repository<Belong>);
    create(createBelongInput: CreateBelongInput): Promise<CreateBelongInput>;
    findAll(): Promise<Belong[]>;
    findOne(id: string): Promise<Belong>;
    update(deckid: number, archetypeid: number, updateBelongInput: UpdateBelongInput): Promise<UpdateBelongInput>;
    remove(id: string): Promise<Belong>;
}
