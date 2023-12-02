import { CreateSuscribeInput } from './dto/create-suscribe.input';
import { UpdateSuscribeInput } from './dto/update-suscribe.input';
import { Repository } from 'typeorm';
import { Suscribe } from './entities/suscribe.entity';
export declare class SuscribeService {
    private suscribeRepository;
    constructor(suscribeRepository: Repository<Suscribe>);
    create(createSuscribeInput: CreateSuscribeInput): Promise<CreateSuscribeInput>;
    findAll(): Promise<Suscribe[]>;
    findOne(id: string): Promise<Suscribe>;
    update(playerid: number, deckid: number, tournamentDate: number, tournamentName: string, updateSuscribeInput: UpdateSuscribeInput): Promise<UpdateSuscribeInput>;
    remove(id: string): Promise<Suscribe>;
}
