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
exports.HaveweakResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const haveweak_service_1 = require("./haveweak.service");
const haveweak_entity_1 = require("./entities/haveweak.entity");
const create_haveweak_input_1 = require("./dto/create-haveweak.input");
const update_haveweak_input_1 = require("./dto/update-haveweak.input");
let HaveweakResolver = class HaveweakResolver {
    constructor(haveweakService) {
        this.haveweakService = haveweakService;
    }
    createHaveweak(createHaveweakInput) {
        return this.haveweakService.create(createHaveweakInput);
    }
    findAll() {
        return this.haveweakService.findAll();
    }
    findOne(tournamentDate, tournamentName, matchid) {
        return this.haveweakService.findOne(tournamentDate, tournamentName, matchid);
    }
    updateHaveweak(updateHaveweakInput) {
        return this.haveweakService.update(updateHaveweakInput.TournamentDate, updateHaveweakInput.TournamentName, updateHaveweakInput.MatchID, updateHaveweakInput);
    }
    removeHaveweak(tournamentDate, tournamentName, matchid) {
        return this.haveweakService.remove(tournamentDate, tournamentName, matchid);
    }
};
exports.HaveweakResolver = HaveweakResolver;
__decorate([
    (0, graphql_1.Mutation)(() => haveweak_entity_1.Haveweak),
    __param(0, (0, graphql_1.Args)('createHaveweakInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_haveweak_input_1.CreateHaveweakInput]),
    __metadata("design:returntype", void 0)
], HaveweakResolver.prototype, "createHaveweak", null);
__decorate([
    (0, graphql_1.Query)(() => [haveweak_entity_1.Haveweak], { name: 'haveweaks' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HaveweakResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => haveweak_entity_1.Haveweak, { name: 'haveweak' }),
    __param(0, (0, graphql_1.Args)('tournamentDate', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('tournamentName', { type: () => String })),
    __param(2, (0, graphql_1.Args)('matchid', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number]),
    __metadata("design:returntype", void 0)
], HaveweakResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => haveweak_entity_1.Haveweak),
    __param(0, (0, graphql_1.Args)('updateHaveweakInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_haveweak_input_1.UpdateHaveweakInput]),
    __metadata("design:returntype", void 0)
], HaveweakResolver.prototype, "updateHaveweak", null);
__decorate([
    (0, graphql_1.Mutation)(() => haveweak_entity_1.Haveweak),
    __param(0, (0, graphql_1.Args)('tournamentDate', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('tournamentName', { type: () => String })),
    __param(2, (0, graphql_1.Args)('matchid', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number]),
    __metadata("design:returntype", void 0)
], HaveweakResolver.prototype, "removeHaveweak", null);
exports.HaveweakResolver = HaveweakResolver = __decorate([
    (0, graphql_1.Resolver)(() => haveweak_entity_1.Haveweak),
    __metadata("design:paramtypes", [haveweak_service_1.HaveweakService])
], HaveweakResolver);
//# sourceMappingURL=haveweak.resolver.js.map