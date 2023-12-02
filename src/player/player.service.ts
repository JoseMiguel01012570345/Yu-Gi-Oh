import { Injectable } from '@nestjs/common';
import { CreatePlayerInput } from './dto/create-player.input';
import { UpdatePlayerInput } from './dto/update-player.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlayerService {

  constructor(
    @InjectRepository(Player)
    private playerRepository: Repository<Player>
  ) { }

  async create(createPlayerInput: CreatePlayerInput) {
    await this.playerRepository.insert(createPlayerInput);
    return createPlayerInput;
  }

  async findAll() {
    return await this.playerRepository.find({});
  }

  async findOne(id: string) {
    return await this.playerRepository.findOneBy({ PlayerName: id })
  }

  async update(id: string, updatePlayerInput: UpdatePlayerInput) {
    await this.playerRepository.update({ PlayerName: id }, updatePlayerInput);
    return updatePlayerInput;
  }

  async remove(id: string) {
    const player = this.playerRepository.findOneBy({PlayerName: id});
    await this.playerRepository.delete({PlayerName: id});
    return player;
  }
}
