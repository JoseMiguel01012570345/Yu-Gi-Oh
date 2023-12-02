import { BelongService } from './belong.service';
import { Belong } from './entities/belong.entity';
import { CreateBelongInput } from './dto/create-belong.input';
import { UpdateBelongInput } from './dto/update-belong.input';
export declare class BelongResolver {
    private readonly belongService;
    constructor(belongService: BelongService);
    createBelong(createBelongInput: CreateBelongInput): Promise<CreateBelongInput>;
    findAll(): Promise<Belong[]>;
    findOne(id: string): Promise<Belong>;
    updateBelong(updateBelongInput: UpdateBelongInput): Promise<UpdateBelongInput>;
    removeBelong(id: string): Promise<Belong>;
}
