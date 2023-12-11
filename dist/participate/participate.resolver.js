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
exports.ParticipateResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const participate_service_1 = require("./participate.service");
const participate_entity_1 = require("./entities/participate.entity");
const create_participate_input_1 = require("./dto/create-participate.input");
const update_participate_input_1 = require("./dto/update-participate.input");
let ParticipateResolver = class ParticipateResolver {
    constructor(participateService) {
        this.participateService = participateService;
    }
    createParticipate(createParticipateInput) {
        return this.participateService.create(createParticipateInput);
    }
    findAll() {
        return this.participateService.findAll();
    }
    findOne(tournamentDate, tournamentName, matchid) {
        return this.participateService.findOne(tournamentDate, tournamentName, matchid);
    }
    updateParticipate(updateParticipateInput) {
        return this.participateService.update(updateParticipateInput.TournamentDate, updateParticipateInput.TournamentName, updateParticipateInput.MatchID, updateParticipateInput);
    }
    removeParticipate(tournamentDate, tournamentName, matchid) {
        return this.participateService.remove(tournamentDate, tournamentName, matchid);
    }
};
exports.ParticipateResolver = ParticipateResolver;
__decorate([
    (0, graphql_1.Mutation)(() => participate_entity_1.Participate),
    __param(0, (0, graphql_1.Args)('createParticipateInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_participate_input_1.CreateParticipateInput]),
    __metadata("design:returntype", void 0)
], ParticipateResolver.prototype, "createParticipate", null);
__decorate([
    (0, graphql_1.Query)(() => [participate_entity_1.Participate], { name: 'participates' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ParticipateResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => participate_entity_1.Participate, { name: 'participate' }),
    __param(0, (0, graphql_1.Args)('TournamentDate', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('TournamentName', { type: () => String })),
    __param(2, (0, graphql_1.Args)('MatchID', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number]),
    __metadata("design:returntype", void 0)
], ParticipateResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => participate_entity_1.Participate),
    __param(0, (0, graphql_1.Args)('updateParticipateInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_participate_input_1.UpdateParticipateInput]),
    __metadata("design:returntype", void 0)
], ParticipateResolver.prototype, "updateParticipate", null);
__decorate([
    (0, graphql_1.Mutation)(() => participate_entity_1.Participate),
    __param(0, (0, graphql_1.Args)('TournamentDate', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('TournamentName', { type: () => String })),
    __param(2, (0, graphql_1.Args)('MatchID', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number]),
    __metadata("design:returntype", void 0)
], ParticipateResolver.prototype, "removeParticipate", null);
exports.ParticipateResolver = ParticipateResolver = __decorate([
    (0, graphql_1.Resolver)(() => participate_entity_1.Participate),
    __metadata("design:paramtypes", [participate_service_1.ParticipateService])
], ParticipateResolver);
//# sourceMappingURL=participate.resolver.js.map