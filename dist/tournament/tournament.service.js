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
exports.TournamentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tournament_entity_1 = require("./entities/tournament.entity");
let TournamentService = class TournamentService {
    constructor(tournamentRepository) {
        this.tournamentRepository = tournamentRepository;
    }
    async create(createTournamentInput) {
        await this.tournamentRepository.insert(createTournamentInput);
        return createTournamentInput;
    }
    async findAll() {
        return await this.tournamentRepository.find({});
    }
    async findOne(date, name) {
        return await this.tournamentRepository.findOneBy({ Date: date, TournamentName: name });
    }
    async getTournamentsByName(name) {
        return await this.tournamentRepository.findBy({ TournamentName: name });
    }
    async getTournamentsByDate(date) {
        return await this.tournamentRepository.findBy({ Date: date });
    }
    async getTournamentsByMunicipio(location) {
        return await this.tournamentRepository.findBy({ Municipio: location });
    }
    async getTournamentsByProvincia(location) {
        return await this.tournamentRepository.findBy({ Provincia: location });
    }
    async update(date, name, updateTournamentInput) {
        await this.tournamentRepository.update({ Date: date, TournamentName: name }, updateTournamentInput);
        return updateTournamentInput;
    }
    async getTournamentsByDateAndProvincia(date, provincia) {
        return await this.tournamentRepository.findBy({ Date: date, Provincia: provincia });
    }
    async getTournamentsByDateAndMunicipio(date, municipio) {
        return await this.tournamentRepository.findBy({ Date: date, Municipio: municipio });
    }
    async getTournamentsByDateAndProvinciaAndMunicipio(date, provincia, municipio) {
        return await this.tournamentRepository.findBy({ Date: date, Provincia: provincia, Municipio: municipio });
    }
    async remove(date, name) {
        const tournament = await this.tournamentRepository.findOneBy({ Date: date, TournamentName: name });
        await this.tournamentRepository.delete({ Date: date, TournamentName: name });
        return tournament;
    }
};
exports.TournamentService = TournamentService;
exports.TournamentService = TournamentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tournament_entity_1.Tournament)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TournamentService);
//# sourceMappingURL=tournament.service.js.map