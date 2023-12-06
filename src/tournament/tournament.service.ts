import { Injectable } from '@nestjs/common';
import { CreateTournamentInput } from './dto/create-tournament.input';
import { UpdateTournamentInput } from './dto/update-tournament.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tournament } from './entities/tournament.entity';

@Injectable()
export class TournamentService {

  constructor(
    @InjectRepository(Tournament)
    private tournamentRepository: Repository<Tournament>
  ) { }

  async create(createTournamentInput: CreateTournamentInput) {
    await this.tournamentRepository.insert(createTournamentInput);
    return createTournamentInput;
  }

  async findAll() {
    return await this.tournamentRepository.find({});
  }

  async findOne(date: number, name: string) {
    return await this.tournamentRepository.findOneBy({ Date: date, TournamentName: name });
  }

  async getTournamentsByName(name: string) {
    return await this.tournamentRepository.findBy({ TournamentName: name });
  }

  async getTournamentsByDate(date: number) {
    return await this.tournamentRepository.findBy({ Date: date });
  }

  async getTournamentsByLocation(location: string) {
    return await this.tournamentRepository.findBy({ TournamentDir: location });
  }

  async update(date: number, name: string, updateTournamentInput: UpdateTournamentInput) {
    await this.tournamentRepository.update({ Date: date, TournamentName: name }, updateTournamentInput);
    return updateTournamentInput;
  }

  async remove(date: number, name: string) {
    const tournament = await this.tournamentRepository.findOneBy({ Date: date, TournamentName: name });
    await this.tournamentRepository.delete({ Date: date, TournamentName: name });
    return tournament;
  }
}
