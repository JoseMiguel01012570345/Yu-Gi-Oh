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
exports.DeckResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const deck_service_1 = require("./deck.service");
const deck_entity_1 = require("./entities/deck.entity");
const create_deck_input_1 = require("./dto/create-deck.input");
const update_deck_input_1 = require("./dto/update-deck.input");
let DeckResolver = class DeckResolver {
    constructor(deckService) {
        this.deckService = deckService;
    }
    createDeck(createDeckInput) {
        return this.deckService.create(createDeckInput);
    }
    findAll() {
        return this.deckService.findAll();
    }
    findOne(id) {
        return this.deckService.findOne(id);
    }
    findDecksByName(deckName) {
        return this.deckService.getDecksByName(deckName);
    }
    findeDecksByMainDeckCount(count) {
        return this.deckService.getDecksByMainDeckCount(count);
    }
    findDecksBySideDeckCount(count) {
        return this.deckService.getDecksBySideDeckCount(count);
    }
    findDecksByExtraDeckCount(count) {
        return this.deckService.getDecksByExtraDeckCount(count);
    }
    updateDeck(updateDeckInput) {
        return this.deckService.update(updateDeckInput.DeckID, updateDeckInput);
    }
    removeDeck(id) {
        return this.deckService.remove(id);
    }
};
exports.DeckResolver = DeckResolver;
__decorate([
    (0, graphql_1.Mutation)(() => create_deck_input_1.CreateDeckResponse),
    __param(0, (0, graphql_1.Args)('createDeckInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_deck_input_1.CreateDeckInput]),
    __metadata("design:returntype", void 0)
], DeckResolver.prototype, "createDeck", null);
__decorate([
    (0, graphql_1.Query)(() => [deck_entity_1.Deck], { name: 'decks' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeckResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => deck_entity_1.Deck, { name: 'deck' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DeckResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Query)(() => [deck_entity_1.Deck], { name: 'decksByName' }),
    __param(0, (0, graphql_1.Args)('name', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeckResolver.prototype, "findDecksByName", null);
__decorate([
    (0, graphql_1.Query)(() => [deck_entity_1.Deck], { name: 'decksByMainDeckCount' }),
    __param(0, (0, graphql_1.Args)('count', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DeckResolver.prototype, "findeDecksByMainDeckCount", null);
__decorate([
    (0, graphql_1.Query)(() => [deck_entity_1.Deck], { name: 'decksBySideDeckCount' }),
    __param(0, (0, graphql_1.Args)('count', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DeckResolver.prototype, "findDecksBySideDeckCount", null);
__decorate([
    (0, graphql_1.Query)(() => [deck_entity_1.Deck], { name: 'decksByExtraDeckCount' }),
    __param(0, (0, graphql_1.Args)('count', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DeckResolver.prototype, "findDecksByExtraDeckCount", null);
__decorate([
    (0, graphql_1.Mutation)(() => deck_entity_1.Deck),
    __param(0, (0, graphql_1.Args)('updateDeckInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_deck_input_1.UpdateDeckInput]),
    __metadata("design:returntype", void 0)
], DeckResolver.prototype, "updateDeck", null);
__decorate([
    (0, graphql_1.Mutation)(() => deck_entity_1.Deck),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DeckResolver.prototype, "removeDeck", null);
exports.DeckResolver = DeckResolver = __decorate([
    (0, graphql_1.Resolver)(() => deck_entity_1.Deck),
    __metadata("design:paramtypes", [deck_service_1.DeckService])
], DeckResolver);
//# sourceMappingURL=deck.resolver.js.map