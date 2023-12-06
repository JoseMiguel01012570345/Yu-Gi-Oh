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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
let Deck = class Deck {
};
exports.Deck = Deck;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Deck ID' }),
    __metadata("design:type", Number)
], Deck.prototype, "DeckID", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    (0, graphql_1.Field)(() => String, { description: "Deck's name" }),
    __metadata("design:type", String)
], Deck.prototype, "DeckName", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Main deck cards count" }),
    __metadata("design:type", Number)
], Deck.prototype, "MainDeckCount", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Side deck cards count" }),
    __metadata("design:type", Number)
], Deck.prototype, "SideDeckCount", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Extra deck cards count" }),
    __metadata("design:type", Number)
], Deck.prototype, "ExtraDeckCount", void 0);
exports.Deck = Deck = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Deck);
//# sourceMappingURL=deck.entity.js.map