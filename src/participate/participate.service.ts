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

  async findOne(tournamentDate: number, tournamentName: string, matchid: number) {
    return await this.participateRepository.findOneBy({ TournamentDate: tournamentDate, TournamentName: tournamentName, MatchID: matchid });
  }

  async getParticipatesByMatch(id: number) {
    return await this.participateRepository.findBy({ MatchID: id });
  }

  async getAllParticipatesByID(tournamentDate: number, tournamentName: string, matchid: number) {
    return await this.participateRepository.findBy({
      TournamentDate: tournamentDate,
      TournamentName: tournamentName,
      MatchID: matchid
    });
  }

  async getParticipatesByTournament(tournamentDate: number, tournamentName: string) {
    return await this.participateRepository.findBy({ TournamentDate: tournamentDate, TournamentName: tournamentName });
  }

  async update(tournamentDate: number, tournamentName: string, matchid: number, updateParticipateInput: UpdateParticipateInput) {
    await this.participateRepository.update({ TournamentDate: tournamentDate, TournamentName: tournamentName, MatchID: matchid }, updateParticipateInput);
    return updateParticipateInput;
  }

  async remove(tournamentDate: number, tournamentName: string, matchid: number) {
    const result = await this.findOne(tournamentDate, tournamentName, matchid);
    await this.participateRepository.delete({ TournamentDate: tournamentDate, TournamentName: tournamentName, MatchID: matchid });
    return result;
  }
}
