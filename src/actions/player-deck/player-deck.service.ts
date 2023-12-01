import { Injectable } from '@nestjs/common';
import { CreatePlayerDeckDto } from './dto/create-player-deck.dto';
import { UpdatePlayerDeckDto } from './dto/update-player-deck.dto';

@Injectable()
export class PlayerDeckService {
  create(createPlayerDeckDto: CreatePlayerDeckDto) {
    return 'This action adds a new playerDeck';
  }

  findAll() {
    return `This action returns all playerDeck`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerDeck`;
  }

  update(id: number, updatePlayerDeckDto: UpdatePlayerDeckDto) {
    return `This action updates a #${id} playerDeck`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerDeck`;
  }
}
