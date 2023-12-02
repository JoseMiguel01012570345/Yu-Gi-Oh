import { Injectable } from '@nestjs/common';
import { CreateBelongInput } from './dto/create-belong.input';
import { UpdateBelongInput } from './dto/update-belong.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Belong } from './entities/belong.entity';

@Injectable()
export class BelongService {

  constructor(
    @InjectRepository(Belong)
    private belongRepository: Repository<Belong>
  ) { }

  async create(createBelongInput: CreateBelongInput) {
    await this.belongRepository.insert(createBelongInput);
    return createBelongInput;
  }

  async findAll() {
    return await this.belongRepository.find({});
  }

  async findOne(id: string) {
    const deckid = id.split('<-->')[0];
    const archetypeid = id.split('<-->')[1];
    return await this.belongRepository.findOneBy({ DeckID: parseInt(deckid), ArcheTypeID: parseInt(archetypeid) });
  }

  async update(deckid: number, archetypeid: number, updateBelongInput: UpdateBelongInput) {
    await this.belongRepository.update({DeckID:deckid,ArcheTypeID:archetypeid},updateBelongInput);
    return updateBelongInput;
  }

  async remove(id: string) {
    const deckid = id.split('<-->')[0];
    const archetypeid = id.split('<-->')[1];
    const result = await this.belongRepository.findOneBy({DeckID:parseInt(deckid), ArcheTypeID:parseInt(archetypeid)});
    await this.belongRepository.delete({DeckID: parseInt(deckid),ArcheTypeID:parseInt(archetypeid)});
    return result;
  }
}
