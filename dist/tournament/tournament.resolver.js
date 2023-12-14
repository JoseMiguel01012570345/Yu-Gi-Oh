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
exports.TournamentResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const tournament_service_1 = require("./tournament.service");
const tournament_entity_1 = require("./entities/tournament.entity");
const create_tournament_input_1 = require("./dto/create-tournament.input");
const update_tournament_input_1 = require("./dto/update-tournament.input");
let TournamentResolver = class TournamentResolver {
    constructor(tournamentService) {
        this.tournamentService = tournamentService;
    }
    createTournament(createTournamentInput) {
        console.log(createTournamentInput);
        return this.tournamentService.create(createTournamentInput);
    }
    findAll() {
        return this.tournamentService.findAll();
    }
    findOne(tournamentDate, tournamentName) {
        return this.tournamentService.findOne(tournamentDate, tournamentName);
    }
    findTournamentsByName(name) {
        return this.tournamentService.getTournamentsByName(name);
    }
    findTournamentsByDate(date) {
        return this.tournamentService.getTournamentsByDate(date);
    }
    findTournamentsByMunicipio(location) {
        return this.tournamentService.getTournamentsByMunicipio(location);
    }
    findTournamentsByProvincia(location) {
        return this.tournamentService.getTournamentsByProvincia(location);
    }
    updateTournament(updateTournamentInput) {
        return this.tournamentService.update(updateTournamentInput.TournamentDate, updateTournamentInput.TournamentName, updateTournamentInput);
    }
    removeTournament(tournamentDate, tournamentName) {
        return this.tournamentService.remove(tournamentDate, tournamentName);
    }
};
exports.TournamentResolver = TournamentResolver;
__decorate([
    (0, graphql_1.Mutation)(() => tournament_entity_1.Tournament),
    __param(0, (0, graphql_1.Args)('createTournamentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tournament_input_1.CreateTournamentInput]),
    __metadata("design:returntype", void 0)
], TournamentResolver.prototype, "createTournament", null);
__decorate([
    (0, graphql_1.Query)(() => [tournament_entity_1.Tournament], { name: 'tournaments' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TournamentResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => tournament_entity_1.Tournament, { name: 'tournament' }),
    __param(0, (0, graphql_1.Args)('tournamentDate', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('tournamentName', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], TournamentResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Query)(() => [tournament_entity_1.Tournament], { name: 'tournamentsByName' }),
    __param(0, (0, graphql_1.Args)('name', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TournamentResolver.prototype, "findTournamentsByName", null);
__decorate([
    (0, graphql_1.Query)(() => [tournament_entity_1.Tournament], { name: 'tournamentsByDate' }),
    __param(0, (0, graphql_1.Args)('date', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TournamentResolver.prototype, "findTournamentsByDate", null);
__decorate([
    (0, graphql_1.Query)(() => [tournament_entity_1.Tournament], { name: 'tournamentsByLocation' }),
    __param(0, (0, graphql_1.Args)('Location', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TournamentResolver.prototype, "findTournamentsByMunicipio", null);
__decorate([
    (0, graphql_1.Query)(() => [tournament_entity_1.Tournament], { name: 'tournamentsByLocation' }),
    __param(0, (0, graphql_1.Args)('Location', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TournamentResolver.prototype, "findTournamentsByProvincia", null);
__decorate([
    (0, graphql_1.Mutation)(() => tournament_entity_1.Tournament),
    __param(0, (0, graphql_1.Args)('updateTournamentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_tournament_input_1.UpdateTournamentInput]),
    __metadata("design:returntype", void 0)
], TournamentResolver.prototype, "updateTournament", null);
__decorate([
    (0, graphql_1.Mutation)(() => tournament_entity_1.Tournament),
    __param(0, (0, graphql_1.Args)('tournamentDate', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('tournamentName', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], TournamentResolver.prototype, "removeTournament", null);
exports.TournamentResolver = TournamentResolver = __decorate([
    (0, graphql_1.Resolver)(() => tournament_entity_1.Tournament),
    __metadata("design:paramtypes", [tournament_service_1.TournamentService])
], TournamentResolver);
//# sourceMappingURL=tournament.resolver.js.map