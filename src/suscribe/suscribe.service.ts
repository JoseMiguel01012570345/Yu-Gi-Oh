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

  async findOne(playerid: string, deckid: number, tournamentDate: number, tournamentName: string) {
    return await this.suscribeRepository.findOneBy({ PlayerID: playerid, DeckID: deckid, TournamentDate: tournamentDate, TournamentName: tournamentName });
  }

  async getTournamentByPlayerWithDeck(playerid: string, deckid: number) {
    return await this.suscribeRepository.findBy({ PlayerID: playerid, DeckID: deckid });
  }

  async getSuscribeByPlayerID(playerid: string) {
    return await this.suscribeRepository.findBy({ PlayerID: playerid });
  }

  async getSuscribesByTournament(tournamentDate: number, tournamentName) {
    return await this.suscribeRepository.findBy({ TournamentDate: tournamentDate, TournamentName: tournamentName });
  }

  async getSuscribesByTournamentsAndPlayer(tournamentName: string, tournamentDate: number, playerID: string) {
    return await this.suscribeRepository.findBy({ TournamentDate: tournamentDate, TournamentName: tournamentName, PlayerID: playerID });
  }

  async update(playerid: string, deckid: number, tournamentDate: number, tournamentName: string, updateSuscribeInput: UpdateSuscribeInput) {
    await this.suscribeRepository.update({ PlayerID: playerid, DeckID: deckid, TournamentDate: tournamentDate, TournamentName: tournamentName }, updateSuscribeInput);
    return updateSuscribeInput;
  }

  async remove(playerid: string, deckid: number, tournamentDate: number, tournamentName: string) {
    const result = await this.suscribeRepository.findOneBy({ PlayerID: playerid, DeckID: deckid, TournamentDate: tournamentDate, TournamentName: tournamentName });
    await this.suscribeRepository.delete({ PlayerID: playerid, DeckID: deckid, TournamentDate: tournamentDate, TournamentName: tournamentName });
    return result;
  }
}
