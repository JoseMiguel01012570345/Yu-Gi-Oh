"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerService = void 0;
const common_1 = require("@nestjs/common");
const participate_service_1 = require("../participate/participate.service");
const haveweak_service_1 = require("../haveweak/haveweak.service");
const archetype_service_1 = require("../archetype/archetype.service");
const player_service_1 = require("../player/player.service");
const deck_service_1 = require("../deck/deck.service");
const have_service_1 = require("../have/have.service");
const belong_service_1 = require("../belong/belong.service");
const suscribe_service_1 = require("../suscribe/suscribe.service");
const tournament_service_1 = require("../tournament/tournament.service");
const match_service_1 = require("../match/match.service");
let ManagerService = class ManagerService {
    constructor(participateService, haveweakService, archetypeService, playerService, deckService, haveService, belongService, suscribeServcice, tournamentService, matchService) {
        this.participateService = participateService;
        this.haveweakService = haveweakService;
        this.archetypeService = archetypeService;
        this.playerService = playerService;
        this.deckService = deckService;
        this.haveService = haveService;
        this.belongService = belongService;
        this.suscribeServcice = suscribeServcice;
        this.tournamentService = tournamentService;
        this.matchService = matchService;
        this.participates = 1;
    }
    async checkPlayersExists(playersInput) {
        const players = await this.playerService.findAll();
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
    async createPlayersMatches(playersInput, tournamentInput) {
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
            const response = {
                Status: 'OK',
                Message: 'All OK'
            };
            return response;
        }
        catch (error) {
            const response = {
                Status: 'Wrong',
                Message: error
            };
            return response;
        }
    }
    checkArcheTypeExists(archetypes, archetype) {
        for (let i = 0; i < archetypes.length; i++) {
            if (archetypes[i].ArcheTypeName === archetype.ArcheTypeName)
                return true;
        }
        return false;
    }
    async registOnePlayer(playerInput, deckInput, archetypeInput, tournamentInput) {
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
            if (!this.checkArcheTypeExists(await this.archetypeService.findAll(), archetypeInput))
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
            const response = {
                Status: 'OK',
                Message: 'All OK'
            };
            return response;
        }
        catch (error) {
            const response = {
                Status: 'WRONG',
                Message: error
            };
            return response;
        }
    }
    async getPlayersSuscribeToTournament(tournamentDate, tournamentName) {
        return this.suscribeServcice.getSuscribesByTournament(tournamentDate, tournamentName);
    }
};
exports.ManagerService = ManagerService;
exports.ManagerService = ManagerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [participate_service_1.ParticipateService,
        haveweak_service_1.HaveweakService,
        archetype_service_1.ArchetypeService,
        player_service_1.PlayerService,
        deck_service_1.DeckService,
        have_service_1.HaveService,
        belong_service_1.BelongService,
        suscribe_service_1.SuscribeService,
        tournament_service_1.TournamentService,
        match_service_1.MatchService])
], ManagerService);
//# sourceMappingURL=manager.service.js.map