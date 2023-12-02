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
exports.BelongResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const belong_service_1 = require("./belong.service");
const belong_entity_1 = require("./entities/belong.entity");
const create_belong_input_1 = require("./dto/create-belong.input");
const update_belong_input_1 = require("./dto/update-belong.input");
let BelongResolver = class BelongResolver {
    constructor(belongService) {
        this.belongService = belongService;
    }
    createBelong(createBelongInput) {
        return this.belongService.create(createBelongInput);
    }
    findAll() {
        return this.belongService.findAll();
    }
    findOne(id) {
        return this.belongService.findOne(id);
    }
    updateBelong(updateBelongInput) {
        return this.belongService.update(updateBelongInput.ArcheTypeID, updateBelongInput.DeckID, updateBelongInput);
    }
    removeBelong(id) {
        return this.belongService.remove(id);
    }
};
exports.BelongResolver = BelongResolver;
__decorate([
    (0, graphql_1.Mutation)(() => belong_entity_1.Belong),
    __param(0, (0, graphql_1.Args)('createBelongInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_belong_input_1.CreateBelongInput]),
    __metadata("design:returntype", void 0)
], BelongResolver.prototype, "createBelong", null);
__decorate([
    (0, graphql_1.Query)(() => [belong_entity_1.Belong], { name: 'belongs' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BelongResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => belong_entity_1.Belong, { name: 'belong' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String, description: "Id most have format (deckid)<-->(archetypeid)" })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BelongResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => belong_entity_1.Belong),
    __param(0, (0, graphql_1.Args)('updateBelongInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_belong_input_1.UpdateBelongInput]),
    __metadata("design:returntype", void 0)
], BelongResolver.prototype, "updateBelong", null);
__decorate([
    (0, graphql_1.Mutation)(() => belong_entity_1.Belong),
    __param(0, (0, graphql_1.Args)('id', { type: () => String, description: "id most have format (deckid)<-->(archetypeid)" })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BelongResolver.prototype, "removeBelong", null);
exports.BelongResolver = BelongResolver = __decorate([
    (0, graphql_1.Resolver)(() => belong_entity_1.Belong),
    __metadata("design:paramtypes", [belong_service_1.BelongService])
], BelongResolver);
//# sourceMappingURL=belong.resolver.js.map