import { PlayerService } from './player.service';
import { Player } from './entities/player.entity';
import { CreatePlayerInput } from './dto/create-player.input';
import { UpdatePlayerInput } from './dto/update-player.input';
export declare class PlayerResolver {
    private readonly playerService;
    constructor(playerService: PlayerService);
    createPlayer(createPlayerInput: CreatePlayerInput): Promise<CreatePlayerInput>;
    findAll(): Promise<Player[]>;
    findOne(id: string): Promise<Player>;
    updatePlayer(updatePlayerInput: UpdatePlayerInput): Promise<UpdatePlayerInput>;
    removePlayer(id: string): Promise<Player>;
}
