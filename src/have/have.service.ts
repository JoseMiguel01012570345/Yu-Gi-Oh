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

  async findOne(deckid: number, playerid: string) {
    return await this.hasRepository.findOneBy({ DeckID: deckid, PlayerID: playerid });
  }

  async update(deckid: number, playerid: string, updateHasInput: UpdateHasInput) {
    await this.hasRepository.update({ DeckID: deckid, PlayerID: playerid }, updateHasInput);
    return updateHasInput;
  }

  async remove(deckid: number, playerid: string) {
    const result = await this.hasRepository.findOneBy({ DeckID: deckid, PlayerID: playerid });
    await this.hasRepository.delete({ DeckID: deckid, PlayerID: playerid });
    return result;
  }
}
