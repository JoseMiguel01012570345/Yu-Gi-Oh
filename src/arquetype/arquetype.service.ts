import { Injectable } from '@nestjs/common';
import { CreateArquetypeDto } from './dto/create-arquetype.dto';
import { UpdateArquetypeDto } from './dto/update-arquetype.dto';

@Injectable()
export class ArquetypeService {
  create(createArquetypeDto: CreateArquetypeDto) {
    return 'This action adds a new arquetype';
  }

  findAll() {
    return `This action returns all arquetype`;
  }

  findOne(id: number) {
    return `This action returns a #${id} arquetype`;
  }

  update(id: number, updateArquetypeDto: UpdateArquetypeDto) {
    return `This action updates a #${id} arquetype`;
  }

  remove(id: number) {
    return `This action removes a #${id} arquetype`;
  }
}
