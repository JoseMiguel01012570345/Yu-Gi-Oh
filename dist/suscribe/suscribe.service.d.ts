import { CreateSuscribeInput } from './dto/create-suscribe.input';
import { UpdateSuscribeInput } from './dto/update-suscribe.input';
import { Repository } from 'typeorm';
import { Suscribe } from './entities/suscribe.entity';
export declare class SuscribeService {
    private suscribeRepository;
    constructor(suscribeRepository: Repository<Suscribe>);
    create(createSuscribeInput: CreateSuscribeInput): Promise<CreateSuscribeInput>;
    findAll(): Promise<Suscribe[]>;
    findOne(playerid: string, deckid: number, tournamentDate: number, tournamentName: string): Promise<Suscribe>;
    getTournamentByPlayerWithDeck(playerid: string, deckid: number): Promise<Suscribe[]>;
    getSuscribeByPlayerID(playerid: string): Promise<Suscribe[]>;
    getSuscribesByTournament(tournamentDate: number, tournamentName: any): Promise<Suscribe[]>;
    getSuscribesByTournamentsAndPlayer(tournamentName: string, tournamentDate: number, playerID: string): Promise<Suscribe[]>;
    update(playerid: string, deckid: number, tournamentDate: number, tournamentName: string, updateSuscribeInput: UpdateSuscribeInput): Promise<UpdateSuscribeInput>;
    remove(playerid: string, deckid: number, tournamentDate: number, tournamentName: string): Promise<Suscribe>;
}
