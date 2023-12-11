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

  async getMaxRoundsByTournament(tournamentName: string, tournamentDate: number) {
    return await this.matchRepository.query(`select * from YuGiOhDB.match where TournamentDate = ${tournamentDate} and TournamentName = '${tournamentName}' and Rounds in ( select max(Rounds) from YuGiOhDB.match where TournamentDate = ${tournamentDate} and TournamentName = '${tournamentName}')`);
  }

  async getMatchsBettwenDates(date1: number, date2: number) {
    return await this.matchRepository.query(`SELECT * FROM YuGiOhDB.match WHERE TournamentDate <= ${date2} AND TournamentDate >= ${date1}`);
  }

  async getMatchByTournamentAndRound(tournamentDate: number, tournamentName: string, round: number) {
    return await this.matchRepository.findBy({ TournamentDate: tournamentDate, TournamentName: tournamentName, Rounds: round });
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
