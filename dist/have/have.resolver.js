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
exports.HaveResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const have_service_1 = require("./have.service");
const has_entity_1 = require("./entities/has.entity");
const create_has_input_1 = require("./dto/create-has.input");
const update_has_input_1 = require("./dto/update-has.input");
let HaveResolver = class HaveResolver {
    constructor(haveService) {
        this.haveService = haveService;
    }
    createHas(createHasInput) {
        return this.haveService.create(createHasInput);
    }
    findAll() {
        return this.haveService.findAll();
    }
    findOne(deckid, playerid) {
        return this.haveService.findOne(deckid, playerid);
    }
    updateHas(updateHasInput) {
        return this.haveService.update(updateHasInput.DeckID, updateHasInput.PlayerID, updateHasInput);
    }
    removeHas(deckid, playerid) {
        return this.haveService.remove(deckid, playerid);
    }
};
exports.HaveResolver = HaveResolver;
__decorate([
    (0, graphql_1.Mutation)(() => has_entity_1.Has),
    __param(0, (0, graphql_1.Args)('createHasInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_has_input_1.CreateHasInput]),
    __metadata("design:returntype", void 0)
], HaveResolver.prototype, "createHas", null);
__decorate([
    (0, graphql_1.Query)(() => [has_entity_1.Has], { name: 'have' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HaveResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => has_entity_1.Has, { name: 'has' }),
    __param(0, (0, graphql_1.Args)('deckid', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('playerid', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], HaveResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => has_entity_1.Has),
    __param(0, (0, graphql_1.Args)('updateHasInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_has_input_1.UpdateHasInput]),
    __metadata("design:returntype", void 0)
], HaveResolver.prototype, "updateHas", null);
__decorate([
    (0, graphql_1.Mutation)(() => has_entity_1.Has),
    __param(0, (0, graphql_1.Args)('deckid', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('playerid', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], HaveResolver.prototype, "removeHas", null);
exports.HaveResolver = HaveResolver = __decorate([
    (0, graphql_1.Resolver)(() => has_entity_1.Has),
    __metadata("design:paramtypes", [have_service_1.HaveService])
], HaveResolver);
//# sourceMappingURL=have.resolver.js.map