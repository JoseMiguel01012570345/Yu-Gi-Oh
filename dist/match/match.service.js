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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const match_entity_1 = require("./entities/match.entity");
const typeorm_2 = require("typeorm");
let MatchService = class MatchService {
    constructor(matchRepository) {
        this.matchRepository = matchRepository;
    }
    async create(createMatchInput) {
        await this.matchRepository.insert(createMatchInput);
        return createMatchInput;
    }
    async findAll() {
        return await this.matchRepository.find({});
    }
    async findOne(tournamentDate, tournamentName, matchid) {
        return await this.matchRepository.findOneBy({ TournamentDate: tournamentDate, TournamentName: tournamentName, MatchID: matchid });
    }
    async getMatchsByDate(date) {
        return await this.matchRepository.findBy({ TournamentDate: date });
    }
    async getMatchsByTournamentName(name, TournamentDate) {
        return await this.matchRepository.findBy({ TournamentName: name, TournamentDate: TournamentDate });
    }
    async getMatchsByRoundsCount(rounds) {
        return await this.matchRepository.findBy({ Rounds: rounds });
    }
    async getMaxRoundsByTournament(tournamentName, tournamentDate) {
        return await this.matchRepository.query(`select * from YuGiOhDB.match where TournamentDate = ${tournamentDate} and TournamentName = '${tournamentName}' and Rounds in ( select max(Rounds) from YuGiOhDB.match where TournamentDate = ${tournamentDate} and TournamentName = '${tournamentName}')`);
    }
    async getMatchsBettwenDates(date1, date2) {
        return await this.matchRepository.query(`SELECT * FROM YuGiOhDB.match WHERE TournamentDate <= ${date2} AND TournamentDate >= ${date1}`);
    }
    async getMatchByTournamentAndRound(tournamentDate, tournamentName, round) {
        return await this.matchRepository.findBy({ TournamentDate: tournamentDate, TournamentName: tournamentName, Rounds: round });
    }
    async update(tournamentDate, tournamentName, matchid, updateMatchInput) {
        await this.matchRepository.update({ MatchID: matchid, TournamentDate: tournamentDate, TournamentName: tournamentName }, updateMatchInput);
        return updateMatchInput;
    }
    async remove(tournamentDate, tournamentName, matchid) {
        const result = await this.matchRepository.findOneBy({ MatchID: matchid, TournamentDate: tournamentDate, TournamentName: tournamentName });
        await this.matchRepository.delete({ MatchID: matchid, TournamentDate: tournamentDate, TournamentName: tournamentName });
        return result;
    }
};
exports.MatchService = MatchService;
exports.MatchService = MatchService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(match_entity_1.Match)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MatchService);
//# sourceMappingURL=match.service.js.map