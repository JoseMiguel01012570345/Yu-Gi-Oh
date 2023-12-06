import { Injectable } from '@nestjs/common';
import { Response, PlayerInput, TournamentInput, MatchInput, DeckInput, ArchetypeInput } from './dto/create-manager.input';
import { ParticipateService } from '../participate/participate.service';
import { HaveweakService } from '../haveweak/haveweak.service';
import { ArchetypeService } from '../archetype/archetype.service';
import { PlayerService } from '../player/player.service';
import { DeckService } from '../deck/deck.service';
import { HaveService } from '../have/have.service';
import { BelongService } from '../belong/belong.service';
import { SuscribeService } from '../suscribe/suscribe.service';
import { TournamentService } from '../tournament/tournament.service';
import { MatchService } from '../match/match.service';

@Injectable()
export class ManagerService {

  private participates: number = 1;

  constructor(
    private readonly participateService: ParticipateService,
    private readonly haveweakService: HaveweakService,
    private readonly archetypeService: ArchetypeService,
    private readonly playerService: PlayerService,
    private readonly deckService: DeckService,
    private readonly haveService: HaveService,
    private readonly belongService: BelongService,
    private readonly suscribeServcice: SuscribeService,
    private readonly tournamentService: TournamentService,
    private readonly matchService: MatchService
  ) { }

  private async checkPlayersExists(playersInput: PlayerInput[]) {
    const players = await this.playerService.findAll()
    for (let i = 0; i < playersInput.length; i++) {
      let exists = false;
      for (let j = 0; j < players.length; j++) {
        if (players[j].PlayerName === playersInput[i].PlayerName && players[j].PlayerPassword === playersInput[i].PlayerPassword) {
          exists = true;
          break;
        }
      }
      if (!exists)
        return {
          Valid: false,
          Message: `The player ${playersInput[i]} doesn't exists`
        };
    }
    return {
      Valid: true,
      Message: 'OK'
    };
  }

  async createPlayersMatches(playersInput: PlayerInput[], tournamentInput: TournamentInput) {
    let matchs = [];
    const status = await this.checkPlayersExists(playersInput);
    if (!status.Valid)
      return {
        Status: 'WRONG',
        Message: status.Message
      };
    try {
      for (let i = 0; i < playersInput.length; i += 2) {
        const input = {
          PlayerOneID: playersInput[i].PlayerName,
          PlayerTwoID: playersInput[i + 1].PlayerName,
          MatchID: this.participates
        };
        const match = {
          TournamentDate: tournamentInput.TournamentDate,
          TournamentName: tournamentInput.TournamentName,
          MatchID: input.MatchID,
          Rounds: 0,
          PlayerOneResult: -1,
          PlayerTwoResult: -1
        };
        matchs.push(match);
        this.participateService.create(input);
        this.matchService.create(match);
        this.haveweakService.create({
          TournamentDate: tournamentInput.TournamentDate,
          TournamentName: tournamentInput.TournamentName,
          MatchID: this.participates
        });
        this.participates += 1;
      }
      const response: Response = {
        Status: 'OK',
        Message: 'All OK'
      };
      return response;
    } catch (error) {
      const response: Response = {
        Status: 'Wrong',
        Message: error
      }
      return response;
    }
  }

  checkArcheTypeExists(archetypes: ArchetypeInput[], archetype: ArchetypeInput) {
    for (let i = 0; i < archetypes.length; i++) {
      if (archetypes[i].ArcheTypeName === archetype.ArcheTypeName)
        return true;
    }
    return false;
  }

  async registOnePlayer(playerInput: PlayerInput, deckInput: DeckInput, archetypeInput: ArchetypeInput, tournamentInput: TournamentInput) {
    const tournaments = await this.tournamentService.findAll();
    if (tournaments.length === 0)
      return {
        Status: 'WRONG',
        Message: "There aren't tournaments to suscribe"
      };
    let contains = false;
    for (let i = 0; i < tournaments.length; i++) {
      if (tournaments[i].TournamentName === tournamentInput.TournamentName && tournaments[i].Date === tournamentInput.TournamentDate) {
        contains = true;
        break;
      }
    }
    if (!contains)
      return {
        Status: 'WRONG',
        Message: `The tournament '${tournamentInput.TournamentName}' doesn't exists`
      };
    try {
      await this.playerService.create(playerInput);
      await this.deckService.create(deckInput);
      if (!this.checkArcheTypeExists(await this.archetypeService.findAll(),archetypeInput))
        await this.archetypeService.create(archetypeInput);
      await this.haveService.create({
        PlayerID: playerInput.PlayerName,
        DeckID: deckInput.DeckID
      });
      await this.belongService.create({
        DeckID: deckInput.DeckID,
        ArcheTypeID: archetypeInput.ArcheTypeName
      });
      await this.suscribeServcice.create({
        PlayerID: playerInput.PlayerName,
        DeckID: deckInput.DeckID,
        TournamentDate: tournamentInput.TournamentDate,
        TournamentName: tournamentInput.TournamentName
      });
      const response: Response = {
        Status: 'OK',
        Message: 'All OK'
      }
      return response;
    } catch (error) {
      const response: Response = {
        Status: 'WRONG',
        Message: error
      }
      return response;
    }
  }

  async getPlayersSuscribeToTournament(tournamentDate: number, tournamentName: string) {
    return this.suscribeServcice.getSuscribesByTournament(tournamentDate, tournamentName);
  }
}
