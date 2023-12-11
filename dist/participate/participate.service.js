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
exports.ParticipateService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const participate_entity_1 = require("./entities/participate.entity");
const typeorm_2 = require("typeorm");
let ParticipateService = class ParticipateService {
    constructor(participateRepository) {
        this.participateRepository = participateRepository;
    }
    async create(createParticipateInput) {
        await this.participateRepository.insert(createParticipateInput);
        return createParticipateInput;
    }
    async findAll() {
        return await this.participateRepository.find({});
    }
    async findOne(tournamentDate, tournamentName, matchid) {
        return await this.participateRepository.findOneBy({ TournamentDate: tournamentDate, TournamentName: tournamentName, MatchID: matchid });
    }
    async getParticipatesByMatch(id) {
        return await this.participateRepository.findBy({ MatchID: id });
    }
    async getAllParticipatesByID(tournamentDate, tournamentName, matchid) {
        return await this.participateRepository.findBy({
            TournamentDate: tournamentDate,
            TournamentName: tournamentName,
            MatchID: matchid
        });
    }
    async getParticipatesByTournament(tournamentDate, tournamentName) {
        return await this.participateRepository.findBy({ TournamentDate: tournamentDate, TournamentName: tournamentName });
    }
    async update(tournamentDate, tournamentName, matchid, updateParticipateInput) {
        await this.participateRepository.update({ TournamentDate: tournamentDate, TournamentName: tournamentName, MatchID: matchid }, updateParticipateInput);
        return updateParticipateInput;
    }
    async remove(tournamentDate, tournamentName, matchid) {
        const result = await this.findOne(tournamentDate, tournamentName, matchid);
        await this.participateRepository.delete({ TournamentDate: tournamentDate, TournamentName: tournamentName, MatchID: matchid });
        return result;
    }
};
exports.ParticipateService = ParticipateService;
exports.ParticipateService = ParticipateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(participate_entity_1.Participate)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ParticipateService);
//# sourceMappingURL=participate.service.js.map