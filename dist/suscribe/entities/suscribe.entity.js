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
exports.Suscribe = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
let Suscribe = class Suscribe {
};
exports.Suscribe = Suscribe;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Player id' }),
    __metadata("design:type", Number)
], Suscribe.prototype, "PlayerID", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Deck id" }),
    __metadata("design:type", Number)
], Suscribe.prototype, "DeckID", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Tournament date" }),
    __metadata("design:type", Number)
], Suscribe.prototype, "TournamentDate", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    (0, graphql_1.Field)(() => String, { description: "Tournament name" }),
    __metadata("design:type", String)
], Suscribe.prototype, "TournamentName", void 0);
exports.Suscribe = Suscribe = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Suscribe);
//# sourceMappingURL=suscribe.entity.js.map