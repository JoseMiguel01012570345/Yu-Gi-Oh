import { Injectable } from '@nestjs/common';
import { CreateDeckArquetypeDto } from './dto/create-deck-arquetype.dto';
import { UpdateDeckArquetypeDto } from './dto/update-deck-arquetype.dto';

@Injectable()
export class DeckArquetypeService {
  create(createDeckArquetypeDto: CreateDeckArquetypeDto) {
    return 'This action adds a new deckArquetype';
  }

  findAll() {
    return `This action returns all deckArquetype`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deckArquetype`;
  }

  update(id: number, updateDeckArquetypeDto: UpdateDeckArquetypeDto) {
    return `This action updates a #${id} deckArquetype`;
  }

  remove(id: number) {
    return `This action removes a #${id} deckArquetype`;
  }
}
