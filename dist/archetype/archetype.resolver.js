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
exports.ArchetypeResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const archetype_service_1 = require("./archetype.service");
const archetype_entity_1 = require("./entities/archetype.entity");
const create_archetype_input_1 = require("./dto/create-archetype.input");
const update_archetype_input_1 = require("./dto/update-archetype.input");
let ArchetypeResolver = class ArchetypeResolver {
    constructor(archetypeService) {
        this.archetypeService = archetypeService;
    }
    createArchetype(createArchetypeInput) {
        return this.archetypeService.create(createArchetypeInput);
    }
    findAll() {
        return this.archetypeService.findAll();
    }
    findOne(id) {
        return this.archetypeService.findOne(id);
    }
    updateArchetype(updateArchetypeInput) {
        return this.archetypeService.update(updateArchetypeInput.ArcheTypeName, updateArchetypeInput);
    }
    removeArchetype(id) {
        return this.archetypeService.remove(id);
    }
};
exports.ArchetypeResolver = ArchetypeResolver;
__decorate([
    (0, graphql_1.Mutation)(() => archetype_entity_1.Archetype),
    __param(0, (0, graphql_1.Args)('createArchetypeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_archetype_input_1.CreateArchetypeInput]),
    __metadata("design:returntype", void 0)
], ArchetypeResolver.prototype, "createArchetype", null);
__decorate([
    (0, graphql_1.Query)(() => [archetype_entity_1.Archetype], { name: 'archetypes' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArchetypeResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => archetype_entity_1.Archetype, { name: 'archetype' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArchetypeResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => archetype_entity_1.Archetype),
    __param(0, (0, graphql_1.Args)('updateArchetypeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_archetype_input_1.UpdateArchetypeInput]),
    __metadata("design:returntype", void 0)
], ArchetypeResolver.prototype, "updateArchetype", null);
__decorate([
    (0, graphql_1.Mutation)(() => archetype_entity_1.Archetype),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArchetypeResolver.prototype, "removeArchetype", null);
exports.ArchetypeResolver = ArchetypeResolver = __decorate([
    (0, graphql_1.Resolver)(() => archetype_entity_1.Archetype),
    __metadata("design:paramtypes", [archetype_service_1.ArchetypeService])
], ArchetypeResolver);
//# sourceMappingURL=archetype.resolver.js.map