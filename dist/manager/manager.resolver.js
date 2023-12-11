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
    createParticipates(playersInput, tournamentInput, round) {
        return this.managerService.createPlayersMatches(playersInput, tournamentInput, round);
    }
    registPlayer(playerInput, deckInput, archetypeInput, tournamentInput) {
        return this.managerService.registOnePlayer(playerInput, deckInput, archetypeInput, tournamentInput);
    }
    findPlayersInTournament(tournamentDate, tournamentName) {
        return this.managerService.getPlayersSuscribeToTournament(tournamentDate, tournamentName);
    }
    findPlayersOrderedByDeckCount() {
        return this.managerService.getPlayersOrderedByDeckCount();
    }
    findArcheTypesByDecksCount() {
        return this.managerService.getArcheTypesByDecksCount();
    }
    findDecksByArcheType(archetype) {
        return this.managerService.getDecksByArcheType(archetype);
    }
    findTournamentByArcheTypeMostUsed(archetype) {
        return this.managerService.getTournamentWithArcheType(archetype);
    }
    findTournamentChampiom(tournamentName, tournamentDate) {
        return this.managerService.getPlayerChampion(tournamentName, tournamentDate);
    }
    findPlayersOrderByResultsBettwenDates(date1, date2) {
        return this.managerService.getPlayersMostWinnersInInterval(date1, date2);
    }
    findArcheTypeMostUsedInTournament(tournamentDate, tournamentName) {
        return this.managerService.getArcheTypeMostUsedInTournament(tournamentDate, tournamentName);
    }
    countWinnsByArcheTypesDecks(date1, date2) {
        return this.managerService.getCountArcheTypesChampiom(date1, date2);
    }
    findPlaceMostWinner(date1, date2) {
        return this.managerService.getPlaceMostWinnerInInterval(date1, date2);
    }
    findAcrheTypeCountInTournamentAndRound(date, name, round) {
        return this.managerService.getArcheTypesMostUsedByTournamentAndRound(date, name, round);
    }
    findArcheTypesMostUsedByAtLeastOnePlayer() {
        return this.managerService.getArcheTypesMostUsedByAtLeastOnePlayer();
    }
    searchArcheTypeData(archetype) {
        return this.managerService.getArcheTypeSearchData(archetype);
    }
    searchArcheTypesData() {
        return this.managerService.getArcheTypesSearchData();
    }
    searchDeckData(deckid) {
        return this.managerService.getDeckData(deckid);
    }
    searchDecksData() {
        return this.managerService.getAllDecksData();
    }
    searchLocationData(location) {
        return this.managerService.getLocationData(location);
    }
    searchAllLocationsData() {
        return this.managerService.getAllLocationDataSearch();
    }
    searchTournamentData(date, name) {
        return this.managerService.getTournamentData(date, name);
    }
    searchTournamentsData() {
        return this.managerService.getAllTournamentData();
    }
    searchUserData(name) {
        return this.managerService.getUserSearchData(name);
    }
    searchAllUsersData() {
        return this.managerService.getAllUserSearchData();
    }
    findUserData(name) {
        return this.managerService.getUserdata(name);
    }
    findAllUsersData() {
        return this.managerService.getAllUserData();
    }
};
exports.ManagerResolver = ManagerResolver;
__decorate([
    (0, graphql_1.Mutation)(() => create_manager_input_1.Response),
    __param(0, (0, graphql_1.Args)('players', { type: () => [create_manager_input_1.PlayerInput] })),
    __param(1, (0, graphql_1.Args)('tournament', { type: () => create_manager_input_1.TournamentInput })),
    __param(2, (0, graphql_1.Args)('round', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, create_manager_input_1.TournamentInput, Number]),
    __metadata("design:returntype", void 0)
], ManagerResolver.prototype, "createParticipates", null);
__decorate([
    (0, graphql_1.Mutation)(() => create_manager_input_1.Response, { name: 'registPlayer' }),
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
__decorate([
    (0, graphql_1.Query)(() => [create_manager_input_1.PlayerResponse], { name: 'playersByDeckCount' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ManagerResolver.prototype, "findPlayersOrderedByDeckCount", null);
__decorate([
    (0, graphql_1.Query)(() => [create_manager_input_1.ArcheTypeResponse], { name: 'archetypesByDecksCount' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ManagerResolver.prototype, "findArcheTypesByDecksCount", null);
__decorate([
    (0, graphql_1.Query)(() => [create_manager_input_1.DeckResponse], { name: 'decksByArhcetype' }),
    __param(0, (0, graphql_1.Args)('archetype', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ManagerResolver.prototype, "findDecksByArcheType", null);
__decorate([
    (0, graphql_1.Query)(() => create_manager_input_1.TournamentResponse, { name: 'tournamentByArcheTypeMostUsed' }),
    __param(0, (0, graphql_1.Args)('archetype', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ManagerResolver.prototype, "findTournamentByArcheTypeMostUsed", null);
__decorate([
    (0, graphql_1.Query)(() => create_manager_input_1.PlayerResponse, { name: 'tournamentChampiom' }),
    __param(0, (0, graphql_1.Args)('tournamentName', { type: () => String })),
    __param(1, (0, graphql_1.Args)('tournamentDate', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], ManagerResolver.prototype, "findTournamentChampiom", null);
__decorate([
    (0, graphql_1.Query)(() => [create_manager_input_1.PlayerResponse], { name: 'playersOrderByResultsBettwenDates' }),
    __param(0, (0, graphql_1.Args)('date1', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('date2', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ManagerResolver.prototype, "findPlayersOrderByResultsBettwenDates", null);
__decorate([
    (0, graphql_1.Query)(() => create_manager_input_1.ArcheTypeResponse, { name: 'archeTypeMostUsedInTournament' }),
    __param(0, (0, graphql_1.Args)('tournamentDate', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('tournamentName', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ManagerResolver.prototype, "findArcheTypeMostUsedInTournament", null);
__decorate([
    (0, graphql_1.Query)(() => [create_manager_input_1.ArcheTypeCountResponse], { name: 'countByArcheTypeWinner' }),
    __param(0, (0, graphql_1.Args)('date1', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('date2', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ManagerResolver.prototype, "countWinnsByArcheTypesDecks", null);
__decorate([
    (0, graphql_1.Query)(() => create_manager_input_1.PlaceResponse, { name: 'placeMostWinner' }),
    __param(0, (0, graphql_1.Args)('date1', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('date2', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ManagerResolver.prototype, "findPlaceMostWinner", null);
__decorate([
    (0, graphql_1.Query)(() => [create_manager_input_1.ArcheTypeCountResponse], { name: 'archetypeMostUsedInTournamentAndRound' }),
    __param(0, (0, graphql_1.Args)('tournamentDate', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('tournamentName', { type: () => String })),
    __param(2, (0, graphql_1.Args)('round', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number]),
    __metadata("design:returntype", void 0)
], ManagerResolver.prototype, "findAcrheTypeCountInTournamentAndRound", null);
__decorate([
    (0, graphql_1.Query)(() => [create_manager_input_1.ArcheTypeCountResponse], { name: 'archeTypeMostUsedAtLeastByOnePlayer' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ManagerResolver.prototype, "findArcheTypesMostUsedByAtLeastOnePlayer", null);
__decorate([
    (0, graphql_1.Query)(() => create_manager_input_1.ArcheTypeSearchDataResponse, { name: 'ArcheTypeSearchData' }),
    __param(0, (0, graphql_1.Args)('archetype', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ManagerResolver.prototype, "searchArcheTypeData", null);
__decorate([
    (0, graphql_1.Query)(() => [create_manager_input_1.ArcheTypeSearchDataResponse], { name: 'ArcheTypesSearchData' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ManagerResolver.prototype, "searchArcheTypesData", null);
__decorate([
    (0, graphql_1.Query)(() => create_manager_input_1.DeckDataResponse, { name: 'deckData' }),
    __param(0, (0, graphql_1.Args)('deckid', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ManagerResolver.prototype, "searchDeckData", null);
__decorate([
    (0, graphql_1.Query)(() => [create_manager_input_1.DeckDataResponse], { name: 'decksData' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ManagerResolver.prototype, "searchDecksData", null);
__decorate([
    (0, graphql_1.Query)(() => create_manager_input_1.LocationSearchDataResponse, { name: 'locationData' }),
    __param(0, (0, graphql_1.Args)('location', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ManagerResolver.prototype, "searchLocationData", null);
__decorate([
    (0, graphql_1.Query)(() => [create_manager_input_1.LocationSearchDataResponse], { name: 'locationsData' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ManagerResolver.prototype, "searchAllLocationsData", null);
__decorate([
    (0, graphql_1.Query)(() => create_manager_input_1.TournamentSearchDataResponse, { name: 'tournamentData' }),
    __param(0, (0, graphql_1.Args)('date', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('name', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], ManagerResolver.prototype, "searchTournamentData", null);
__decorate([
    (0, graphql_1.Query)(() => [create_manager_input_1.TournamentSearchDataResponse], { name: 'tournamentsData' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ManagerResolver.prototype, "searchTournamentsData", null);
__decorate([
    (0, graphql_1.Query)(() => create_manager_input_1.UserSearchData, { name: 'userSearchData' }),
    __param(0, (0, graphql_1.Args)('name', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ManagerResolver.prototype, "searchUserData", null);
__decorate([
    (0, graphql_1.Query)(() => [create_manager_input_1.UserSearchData], { name: 'usersSearchData' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ManagerResolver.prototype, "searchAllUsersData", null);
__decorate([
    (0, graphql_1.Query)(() => create_manager_input_1.UserDataResponse, { name: 'userData' }),
    __param(0, (0, graphql_1.Args)('name', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ManagerResolver.prototype, "findUserData", null);
__decorate([
    (0, graphql_1.Query)(() => [create_manager_input_1.UserDataResponse], { name: 'usersData' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ManagerResolver.prototype, "findAllUsersData", null);
exports.ManagerResolver = ManagerResolver = __decorate([
    (0, graphql_1.Resolver)(() => create_manager_input_1.Response),
    __metadata("design:paramtypes", [manager_service_1.ManagerService])
], ManagerResolver);
//# sourceMappingURL=manager.resolver.js.map