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
exports.HaveweakService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const haveweak_entity_1 = require("./entities/haveweak.entity");
const typeorm_2 = require("typeorm");
let HaveweakService = class HaveweakService {
    constructor(haveweakRepository) {
        this.haveweakRepository = haveweakRepository;
    }
    async create(createHaveweakInput) {
        await this.haveweakRepository.insert(createHaveweakInput);
        return createHaveweakInput;
    }
    async findAll() {
        return await this.haveweakRepository.find({});
    }
    async findOne(tournamentDate, tournamentName, matchid) {
        return await this.haveweakRepository.findOneBy({ TournamentDate: tournamentDate, TournamentName: tournamentName, MatchID: matchid });
    }
    async update(tournamentDate, tournamentName, matchid, updateHaveweakInput) {
        await this.haveweakRepository.update({ TournamentDate: tournamentDate, TournamentName: tournamentName, MatchID: matchid }, updateHaveweakInput);
        return updateHaveweakInput;
    }
    async remove(tournamentDate, tournamentName, matchid) {
        const result = await this.findOne(tournamentDate, tournamentName, matchid);
        await this.haveweakRepository.delete({ TournamentDate: tournamentDate, TournamentName: tournamentName, MatchID: matchid });
        return result;
    }
};
exports.HaveweakService = HaveweakService;
exports.HaveweakService = HaveweakService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(haveweak_entity_1.Haveweak)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HaveweakService);
//# sourceMappingURL=haveweak.service.js.map