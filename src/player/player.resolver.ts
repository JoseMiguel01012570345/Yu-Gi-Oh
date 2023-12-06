import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PlayerService } from './player.service';
import { Player } from './entities/player.entity';
import { CreatePlayerInput } from './dto/create-player.input';
import { UpdatePlayerInput } from './dto/update-player.input';

@Resolver(() => Player)
export class PlayerResolver {
  constructor(private readonly playerService: PlayerService) {}

  @Mutation(() => Player)
  createPlayer(@Args('createPlayerInput') createPlayerInput: CreatePlayerInput) {
    return this.playerService.create(createPlayerInput);
  }

  @Query(() => [Player], { name: 'players' })
  findAll() {
    return this.playerService.findAll();
  }

  @Query(() => Player, { name: 'player' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.playerService.findOne(id);
  }

  @Mutation(() => Player)
  updatePlayer(@Args('updatePlayerInput') updatePlayerInput: UpdatePlayerInput) {
    return this.playerService.update(updatePlayerInput.PlayerName, updatePlayerInput);
  }

  @Mutation(() => Player)
  removePlayer(@Args('id', { type: () => String }) id: string) {
    return this.playerService.remove(id);
  }
}
