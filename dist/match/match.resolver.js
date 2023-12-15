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
exports.MatchResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const match_service_1 = require("./match.service");
const match_entity_1 = require("./entities/match.entity");
const create_match_input_1 = require("./dto/create-match.input");
const update_match_input_1 = require("./dto/update-match.input");
let MatchResolver = class MatchResolver {
    constructor(matchService) {
        this.matchService = matchService;
    }
    createMatch(createMatchInput) {
        return this.matchService.create(createMatchInput);
    }
    findAll() {
        return this.matchService.findAll();
    }
    findOne(tournamentDate, tournamentName, matchid) {
        return this.matchService.findOne(tournamentDate, tournamentName, matchid);
    }
    findMatchsByDate(date) {
        return this.matchService.getMatchsByDate(date);
    }
    findMatchsByTournamentName(tournamentName, tournamentDate) {
        return this.matchService.getMatchsByTournamentName(tournamentName, tournamentDate);
    }
    findMatchsByRoundsCount(rounds) {
        return this.matchService.getMatchsByRoundsCount(rounds);
    }
    updateMatch(updateMatchInput) {
        return this.matchService.update(updateMatchInput.TournamentDate, updateMatchInput.TournamentName, updateMatchInput.MatchID, updateMatchInput);
    }
    removeMatch(tournamentDate, tournamentName, matchid) {
        return this.matchService.remove(tournamentDate, tournamentName, matchid);
    }
};
exports.MatchResolver = MatchResolver;
__decorate([
    (0, graphql_1.Mutation)(() => match_entity_1.Match),
    __param(0, (0, graphql_1.Args)('createMatchInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_match_input_1.CreateMatchInput]),
    __metadata("design:returntype", void 0)
], MatchResolver.prototype, "createMatch", null);
__decorate([
    (0, graphql_1.Query)(() => [match_entity_1.Match], { name: 'matchs' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MatchResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => match_entity_1.Match, { name: 'match' }),
    __param(0, (0, graphql_1.Args)('tournamentDate', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('tournamentName', { type: () => String })),
    __param(2, (0, graphql_1.Args)('matchid', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number]),
    __metadata("design:returntype", void 0)
], MatchResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Query)(() => [match_entity_1.Match], { name: 'matchsByDate' }),
    __param(0, (0, graphql_1.Args)('date', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MatchResolver.prototype, "findMatchsByDate", null);
__decorate([
    (0, graphql_1.Query)(() => [match_entity_1.Match], { name: 'matchsByTournamentName' }),
    __param(0, (0, graphql_1.Args)('tournamentName', { type: () => String })),
    __param(1, (0, graphql_1.Args)('tournamentDate', { type: () => Number })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], MatchResolver.prototype, "findMatchsByTournamentName", null);
__decorate([
    (0, graphql_1.Query)(() => [match_entity_1.Match], { name: 'matchsByRoundsCount' }),
    __param(0, (0, graphql_1.Args)('rounds', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MatchResolver.prototype, "findMatchsByRoundsCount", null);
__decorate([
    (0, graphql_1.Mutation)(() => match_entity_1.Match),
    __param(0, (0, graphql_1.Args)('updateMatchInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_match_input_1.UpdateMatchInput]),
    __metadata("design:returntype", void 0)
], MatchResolver.prototype, "updateMatch", null);
__decorate([
    (0, graphql_1.Mutation)(() => match_entity_1.Match),
    __param(0, (0, graphql_1.Args)('tournamentDate', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('tournamentName', { type: () => String })),
    __param(2, (0, graphql_1.Args)('matchid', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number]),
    __metadata("design:returntype", void 0)
], MatchResolver.prototype, "removeMatch", null);
exports.MatchResolver = MatchResolver = __decorate([
    (0, graphql_1.Resolver)(() => match_entity_1.Match),
    __metadata("design:paramtypes", [match_service_1.MatchService])
], MatchResolver);
//# sourceMappingURL=match.resolver.js.map