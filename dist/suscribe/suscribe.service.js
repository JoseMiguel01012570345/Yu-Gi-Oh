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
exports.SuscribeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const suscribe_entity_1 = require("./entities/suscribe.entity");
let SuscribeService = class SuscribeService {
    constructor(suscribeRepository) {
        this.suscribeRepository = suscribeRepository;
    }
    async create(createSuscribeInput) {
        await this.suscribeRepository.insert(createSuscribeInput);
        return createSuscribeInput;
    }
    async findAll() {
        return await this.suscribeRepository.find({});
    }
    async findOne(playerid, deckid, tournamentDate, tournamentName) {
        return await this.suscribeRepository.findOneBy({ PlayerID: playerid, DeckID: deckid, TournamentDate: tournamentDate, TournamentName: tournamentName });
    }
    async getSuscribesByTournament(tournamentDate, tournamentName) {
        return this.suscribeRepository.findBy({ TournamentDate: tournamentDate, TournamentName: tournamentName });
    }
    async update(playerid, deckid, tournamentDate, tournamentName, updateSuscribeInput) {
        await this.suscribeRepository.update({ PlayerID: playerid, DeckID: deckid, TournamentDate: tournamentDate, TournamentName: tournamentName }, updateSuscribeInput);
        return updateSuscribeInput;
    }
    async remove(playerid, deckid, tournamentDate, tournamentName) {
        const result = await this.suscribeRepository.findOneBy({ PlayerID: playerid, DeckID: deckid, TournamentDate: tournamentDate, TournamentName: tournamentName });
        await this.suscribeRepository.delete({ PlayerID: playerid, DeckID: deckid, TournamentDate: tournamentDate, TournamentName: tournamentName });
        return result;
    }
};
exports.SuscribeService = SuscribeService;
exports.SuscribeService = SuscribeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(suscribe_entity_1.Suscribe)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SuscribeService);
//# sourceMappingURL=suscribe.service.js.map