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
exports.SuscribeResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const suscribe_service_1 = require("./suscribe.service");
const suscribe_entity_1 = require("./entities/suscribe.entity");
const create_suscribe_input_1 = require("./dto/create-suscribe.input");
const update_suscribe_input_1 = require("./dto/update-suscribe.input");
let SuscribeResolver = class SuscribeResolver {
    constructor(suscribeService) {
        this.suscribeService = suscribeService;
    }
    createSuscribe(createSuscribeInput) {
        return this.suscribeService.create(createSuscribeInput);
    }
    findAll() {
        return this.suscribeService.findAll();
    }
    findOne(id) {
        return this.suscribeService.findOne(id);
    }
    updateSuscribe(updateSuscribeInput) {
        return this.suscribeService.update(updateSuscribeInput.PlayerID, updateSuscribeInput.DeckID, updateSuscribeInput.TournamentDate, updateSuscribeInput.TournamentName, updateSuscribeInput);
    }
    removeSuscribe(id) {
        return this.suscribeService.remove(id);
    }
};
exports.SuscribeResolver = SuscribeResolver;
__decorate([
    (0, graphql_1.Mutation)(() => suscribe_entity_1.Suscribe),
    __param(0, (0, graphql_1.Args)('createSuscribeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_suscribe_input_1.CreateSuscribeInput]),
    __metadata("design:returntype", void 0)
], SuscribeResolver.prototype, "createSuscribe", null);
__decorate([
    (0, graphql_1.Query)(() => [suscribe_entity_1.Suscribe], { name: 'suscribes' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SuscribeResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => suscribe_entity_1.Suscribe, { name: 'suscribe' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String, description: "id most have format (playerid)<-->(deckid)<-->(tournamentDate)<-->(tournamentName)" })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SuscribeResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => suscribe_entity_1.Suscribe),
    __param(0, (0, graphql_1.Args)('updateSuscribeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_suscribe_input_1.UpdateSuscribeInput]),
    __metadata("design:returntype", void 0)
], SuscribeResolver.prototype, "updateSuscribe", null);
__decorate([
    (0, graphql_1.Mutation)(() => suscribe_entity_1.Suscribe),
    __param(0, (0, graphql_1.Args)('id', { type: () => String, description: "id most have format (playerid)<-->(deckid)<-->(tournamentDate)<-->(tournamentName)" })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SuscribeResolver.prototype, "removeSuscribe", null);
exports.SuscribeResolver = SuscribeResolver = __decorate([
    (0, graphql_1.Resolver)(() => suscribe_entity_1.Suscribe),
    __metadata("design:paramtypes", [suscribe_service_1.SuscribeService])
], SuscribeResolver);
//# sourceMappingURL=suscribe.resolver.js.map