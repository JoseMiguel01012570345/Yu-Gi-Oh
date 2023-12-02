import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMatchInput } from './dto/create-match.input';
import { UpdateMatchInput } from './dto/update-match.input';
import { Match } from './entities/match.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MatchService {

  constructor(
    @InjectRepository(Match)
    private matchRepository: Repository<Match>
  ) { }

  async create(createMatchInput: CreateMatchInput) {
    await this.matchRepository.insert(createMatchInput);
    return createMatchInput;
  }

  async findAll() {
    return await this.matchRepository.find({});
  }

  async findOne(id: number) {
    return await this.matchRepository.findOneBy({ MatchID: id });
  }

  async update(id: number, updateMatchInput: UpdateMatchInput) {
    await this.matchRepository.update({MatchID:id}, updateMatchInput);
    return updateMatchInput;
  }

  async remove(id: number) {
    const result = await this.matchRepository.findOneBy({MatchID:id});
    await this.matchRepository.delete({MatchID:id});
    return result;
  }
}
