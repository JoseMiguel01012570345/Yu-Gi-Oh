import { Injectable } from '@nestjs/common';
import { CreateHaveweakInput } from './dto/create-haveweak.input';
import { UpdateHaveweakInput } from './dto/update-haveweak.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Haveweak } from './entities/haveweak.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HaveweakService {

  constructor(
    @InjectRepository(Haveweak)
    private haveweakRepository: Repository<Haveweak>
  ) { }

  async create(createHaveweakInput: CreateHaveweakInput) {
    await this.haveweakRepository.insert(createHaveweakInput);
    return createHaveweakInput;
  }

  async findAll() {
    return await this.haveweakRepository.find({});
  }

  async findOne(tournamentDate: number, tournamentName: string, matchid: number) {
    return await this.haveweakRepository.findOneBy({TournamentDate: tournamentDate, TournamentName: tournamentName, MatchID: matchid})
  }

  async update(tournamentDate: number, tournamentName: string, matchid: number, updateHaveweakInput: UpdateHaveweakInput) {
    await this.haveweakRepository.update({ TournamentDate: tournamentDate, TournamentName: tournamentName, MatchID: matchid}, updateHaveweakInput);
    return updateHaveweakInput;
  }

  async remove(tournamentDate: number, tournamentName: string, matchid: number) {
    const result = await this.findOne(tournamentDate, tournamentName, matchid)
    await this.haveweakRepository.delete({ TournamentDate: tournamentDate, TournamentName: tournamentName, MatchID: matchid})
    return result;
  }
}
