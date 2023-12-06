import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateParticipateInput } from './dto/create-participate.input';
import { UpdateParticipateInput } from './dto/update-participate.input';
import { Participate } from './entities/participate.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ParticipateService {

  constructor(
    @InjectRepository(Participate)
    private participateRepository: Repository<Participate>
  ) { }

  async create(createParticipateInput: CreateParticipateInput) {
    await this.participateRepository.insert(createParticipateInput)
    return createParticipateInput;
  }

  async findAll() {
    return await this.participateRepository.find({});
  }

  async findOne(player1id: string, player2id: string, matchid: number) {
    return await this.participateRepository.findOneBy({ PlayerOneID: player1id, PlayerTwoID: player2id, MatchID: matchid });
  }

  async update(player1id: string, player2id: string, matchid: number, updateParticipateInput: UpdateParticipateInput) {
    await this.participateRepository.update({ PlayerOneID: player1id, PlayerTwoID: player2id, MatchID: matchid }, updateParticipateInput);
    return updateParticipateInput;
  }

  async remove(player1id: string, player2id: string, matchid: number) {
    const result = await this.findOne(player1id, player2id, matchid);
    await this.participateRepository.delete({PlayerOneID: player1id, PlayerTwoID: player2id, MatchID: matchid});
    return result;
  }
}
