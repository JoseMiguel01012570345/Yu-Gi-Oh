import { CreatePlayerInput } from './dto/create-player.input';
import { UpdatePlayerInput } from './dto/update-player.input';
import { Player } from './entities/player.entity';
import { Repository } from 'typeorm';
export declare class PlayerService {
    private playerRepository;
    constructor(playerRepository: Repository<Player>);
    create(createPlayerInput: CreatePlayerInput): Promise<CreatePlayerInput>;
    findAll(): Promise<Player[]>;
    findOne(id: string): Promise<Player>;
    update(id: string, updatePlayerInput: UpdatePlayerInput): Promise<UpdatePlayerInput>;
    remove(id: string): Promise<Player>;
}
