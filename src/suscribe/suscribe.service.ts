import { Injectable } from '@nestjs/common';
import { CreateSuscribeInput } from './dto/create-suscribe.input';
import { UpdateSuscribeInput } from './dto/update-suscribe.input';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { Suscribe } from './entities/suscribe.entity';

@Injectable()
export class SuscribeService {

  constructor(
    @InjectRepository(Suscribe)
    private suscribeRepository: Repository<Suscribe>
  ) { }

  async create(createSuscribeInput: CreateSuscribeInput) {
    await this.suscribeRepository.insert(createSuscribeInput);
    return createSuscribeInput;
  }

  async findAll() {
    return await this.suscribeRepository.find({});
  }

  async findOne(id: string) {
    const data = id.split('<-->');
    const playerid = parseInt(data[0]);
    const deckid = parseInt(data[1]);
    const tournamentDate = parseInt(data[2]);
    const tournamentName = data[3];
    return await this.suscribeRepository.findOneBy({ PlayerID: playerid, DeckID: deckid, TournamentDate: tournamentDate, TournamentName: tournamentName });
  }

  async update(playerid: number, deckid: number, tournamentDate: number, tournamentName: string, updateSuscribeInput: UpdateSuscribeInput) {
    await this.suscribeRepository.update({ PlayerID: playerid, DeckID: deckid, TournamentDate: tournamentDate, TournamentName: tournamentName }, updateSuscribeInput);
    return updateSuscribeInput;
  }

  async remove(id: string) {
    const data = id.split('<-->');
    const playerid = parseInt(data[0]);
    const deckid = parseInt(data[1]);
    const tournamentDate = parseInt(data[2]);
    const tournamentName = data[3];
    const result = await this.suscribeRepository.findOneBy({ PlayerID: playerid, DeckID: deckid, TournamentDate: tournamentDate, TournamentName: tournamentName });
    await this.suscribeRepository.delete({ PlayerID: playerid, DeckID: deckid, TournamentDate: tournamentDate, TournamentName: tournamentName });
    return result;
  }
}
