import { Injectable } from '@nestjs/common';
import { CreateHasInput } from './dto/create-has.input';
import { UpdateHasInput } from './dto/update-has.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Has } from './entities/has.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HaveService {

  constructor(
    @InjectRepository(Has)
    private hasRepository: Repository<Has>
  ) { }

  async create(createHasInput: CreateHasInput) {
    await this.hasRepository.insert(createHasInput);
    return createHasInput;
  }

  async findAll() {
    return await this.hasRepository.find({});
  }

  async findOne(id: string) {
    const deckid = id.split("<-->")[0];
    const playerid = id.split("<-->")[1];
    return await this.hasRepository.findOneBy({ DeckID: parseInt(deckid), PlayerID: parseInt(playerid) });
  }

  async update(deckid: number, playerid: number, updateHasInput: UpdateHasInput) {
    await this.hasRepository.update({ DeckID: deckid, PlayerID: playerid }, updateHasInput);
    return updateHasInput;
  }

  async remove(id: string) {
    const deckid = id.split("<-->")[0];
    const playerid = id.split('<-->')[1];
    const result = await this.hasRepository.findOneBy({ DeckID: parseInt(deckid), PlayerID: parseInt(playerid) });
    await this.hasRepository.delete({ DeckID: parseInt(deckid), PlayerID: parseInt(playerid) });
    return result;
  }
}
