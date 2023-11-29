import { Injectable } from '@nestjs/common';
import { CreateDecksDbDto } from './dto/create-decks_db.dto';
import { UpdateDecksDbDto } from './dto/update-decks_db.dto';

@Injectable()
export class DecksDbService {
  create(createDecksDbDto: CreateDecksDbDto) {
    return 'This action adds a new decksDb';
  }

  findAll() {
    return `This action returns all decksDb`;
  }

  findOne(id: number) {
    return `This action returns a #${id} decksDb`;
  }

  update(id: number, updateDecksDbDto: UpdateDecksDbDto) {
    return `This action updates a #${id} decksDb`;
  }

  remove(id: number) {
    return `This action removes a #${id} decksDb`;
  }
}
