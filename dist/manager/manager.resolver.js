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
exports.ManagerResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const manager_service_1 = require("./manager.service");
const create_manager_input_1 = require("./dto/create-manager.input");
let ManagerResolver = class ManagerResolver {
    constructor(managerService) {
        this.managerService = managerService;
    }
    createParticipates(playersInput, tournamentInput) {
        return this.managerService.createPlayersMatches(playersInput, tournamentInput);
    }
    registPlayer(playerInput, deckInput, archetypeInput, tournamentInput) {
        return this.managerService.registOnePlayer(playerInput, deckInput, archetypeInput, tournamentInput);
    }
    findPlayersInTournament(tournamentDate, tournamentName) {
        return this.managerService.getPlayersSuscribeToTournament(tournamentDate, tournamentName);
    }
};
exports.ManagerResolver = ManagerResolver;
__decorate([
    (0, graphql_1.Mutation)(() => create_manager_input_1.Response),
    __param(0, (0, graphql_1.Args)('players', { type: () => [create_manager_input_1.PlayerInput] })),
    __param(1, (0, graphql_1.Args)('tournament', { type: () => create_manager_input_1.TournamentInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, create_manager_input_1.TournamentInput]),
    __metadata("design:returntype", void 0)
], ManagerResolver.prototype, "createParticipates", null);
__decorate([
    (0, graphql_1.Mutation)(() => create_manager_input_1.Response),
    __param(0, (0, graphql_1.Args)('player', { type: () => create_manager_input_1.PlayerInput })),
    __param(1, (0, graphql_1.Args)('deck', { type: () => create_manager_input_1.DeckInput })),
    __param(2, (0, graphql_1.Args)('archetype', { type: () => create_manager_input_1.ArchetypeInput })),
    __param(3, (0, graphql_1.Args)('tournament', { type: () => create_manager_input_1.TournamentInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_manager_input_1.PlayerInput,
        create_manager_input_1.DeckInput,
        create_manager_input_1.ArchetypeInput,
        create_manager_input_1.TournamentInput]),
    __metadata("design:returntype", void 0)
], ManagerResolver.prototype, "registPlayer", null);
__decorate([
    (0, graphql_1.Query)(() => [create_manager_input_1.SuscribeResponse], { name: 'playersInTournament' }),
    __param(0, (0, graphql_1.Args)('tournamentDate', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('tournamentName', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], ManagerResolver.prototype, "findPlayersInTournament", null);
exports.ManagerResolver = ManagerResolver = __decorate([
    (0, graphql_1.Resolver)(() => create_manager_input_1.Response),
    __metadata("design:paramtypes", [manager_service_1.ManagerService])
], ManagerResolver);
//# sourceMappingURL=manager.resolver.js.map