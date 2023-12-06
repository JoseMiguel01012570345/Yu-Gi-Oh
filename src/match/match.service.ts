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

  async findOne(tournamentDate: number, tournamentName: string, matchid: number) {
    return await this.matchRepository.findOneBy({ TournamentDate: tournamentDate, TournamentName: tournamentName, MatchID: matchid });
  }

  async getMatchsByDate(date: number) {
    return await this.matchRepository.findBy({ TournamentDate: date });
  }

  async getMatchsByTournamentName(name: string) {
    return await this.matchRepository.findBy({ TournamentName: name });
  }

  async getMatchsByRoundsCount(rounds: number) {
    return await this.matchRepository.findBy({ Rounds: rounds });
  }

  async update(tournamentDate: number, tournamentName: string, matchid: number, updateMatchInput: UpdateMatchInput) {
    await this.matchRepository.update({ MatchID: matchid, TournamentDate: tournamentDate, TournamentName: tournamentName }, updateMatchInput);
    return updateMatchInput;
  }

  async remove(tournamentDate: number, tournamentName: string, matchid: number) {
    const result = await this.matchRepository.findOneBy({ MatchID: matchid, TournamentDate: tournamentDate, TournamentName: tournamentName });
    await this.matchRepository.delete({ MatchID: matchid, TournamentDate: tournamentDate, TournamentName: tournamentName });
    return result;
  }
}
