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

  async findOne(deckid: number, archetypeid: string) {
    return await this.belongRepository.findOneBy({ DeckID: deckid, ArcheTypeID: archetypeid });
  }

  async getArchetypeOrderedByDecksCount() {
    return await this.belongRepository.query('SELECT ArcheTypeID FROM belong GROUP BY ArcheTypeID ORDER BY COUNT(ArcheTypeID) DESC');
  }

  async getDecksIDByArcheType(acrhetype: string) {
    return await this.belongRepository.findBy({ ArcheTypeID: acrhetype });
  }

  async getDecksCountByArcheType(archeType: string) {
    return await this.belongRepository.countBy({ ArcheTypeID: archeType });
  }

  async getArcheTypesByDeckID(deckid: number) {
    return await this.belongRepository.findBy({ DeckID: deckid });
  }

  async update(deckid: number, archetypeid: string, updateBelongInput: UpdateBelongInput) {
    await this.belongRepository.update({ DeckID: deckid, ArcheTypeID: archetypeid }, updateBelongInput);
    return updateBelongInput;
  }

  async remove(deckid: number, archetypeid: string) {
    const result = await this.belongRepository.findOneBy({ DeckID: deckid, ArcheTypeID: archetypeid });
    await this.belongRepository.delete({ DeckID: deckid, ArcheTypeID: archetypeid });
    return result;
  }
}
