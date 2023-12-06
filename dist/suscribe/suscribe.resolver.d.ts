import { SuscribeService } from './suscribe.service';
import { Suscribe } from './entities/suscribe.entity';
import { CreateSuscribeInput } from './dto/create-suscribe.input';
import { UpdateSuscribeInput } from './dto/update-suscribe.input';
export declare class SuscribeResolver {
    private readonly suscribeService;
    constructor(suscribeService: SuscribeService);
    createSuscribe(createSuscribeInput: CreateSuscribeInput): Promise<CreateSuscribeInput>;
    findAll(): Promise<Suscribe[]>;
    findOne(playerid: string, deckid: number, tournamentDate: number, tournamentName: any): Promise<Suscribe>;
    updateSuscribe(updateSuscribeInput: UpdateSuscribeInput): Promise<UpdateSuscribeInput>;
    removeSuscribe(playerid: string, deckid: number, tournamentDate: number, tournamentName: string): Promise<Suscribe>;
}
