import { Injectable } from '@nestjs/common';
import { CreateDeckInput } from './dto/create-deck.input';
import { UpdateDeckInput } from './dto/update-deck.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Deck } from './entities/deck.entity';

@Injectable()
export class DeckService {

  constructor(
    @InjectRepository(Deck)
    private deckRepository: Repository<Deck>
  ) { }

  async create(createDeckInput: CreateDeckInput) {
    try {
      await this.deckRepository.insert(createDeckInput)
      return { Message: 'Deck created succesfully' };
    } catch (error) {
      return { Message: `Error during the operation: ${error}` };
    }
  }

  async findAll() {
    return await this.deckRepository.find({});
  }

  async findOne(id: number) {
    return await this.deckRepository.findOneBy({ DeckID: id });
  }

  async getDecksByName(name: string) {
    return await this.deckRepository.findBy({ DeckName: name });
  }

  async getDecksByMainDeckCount(count: number) {
    return await this.deckRepository.findBy({ MainDeckCount: count });
  }

  async getDecksBySideDeckCount(count: number) {
    return await this.deckRepository.findBy({ SideDeckCount: count });
  }

  async getDecksByExtraDeckCount(count: number) {
    return await this.deckRepository.findBy({ ExtraDeckCount: count });
  }

  async update(id: number, updateDeckInput: UpdateDeckInput) {
    await this.deckRepository.update({ DeckID: id }, updateDeckInput);
    return updateDeckInput;
  }

  async remove(id: number) {
    const deck = await this.deckRepository.findOneBy({ DeckID: id });
    await this.deckRepository.delete({ DeckID: id });
    return deck;
  }
}
