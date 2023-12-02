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

  async findOne(id: string) {
    const date = id.split('<-->')[0];
    const name = id.split('<-->')[1];
    return await this.tournamentRepository.findOneBy({ Date: date, TournamentName: name });
  }

  async update(id: string, updateTournamentInput: UpdateTournamentInput) {
    const date = id.split('<-->')[0];
    const name = id.split('<-->')[1];
    await this.tournamentRepository.update({ Date: date, TournamentName: name }, updateTournamentInput);
    return updateTournamentInput;
  }

  async remove(id: string) {
    const date = id.split('<-->')[0];
    const name = id.split('<-->')[1];
    const tournament = await this.tournamentRepository.findOneBy({ Date: date, TournamentName: name });
    await this.tournamentRepository.delete({ Date: date, TournamentName: name });
    return tournament;
  }
}
