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
exports.Match = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
let Match = class Match {
};
exports.Match = Match;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    (0, graphql_1.Field)(() => String, { description: "Tournament's ID who this instance depends.\n Most have format (date)<-->name" }),
    __metadata("design:type", Number)
], Match.prototype, "TournamentID", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Match's id" }),
    __metadata("design:type", Number)
], Match.prototype, "MatchID", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Round" }),
    __metadata("design:type", Number)
], Match.prototype, "Rounds", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Player1's result in this match" }),
    __metadata("design:type", Number)
], Match.prototype, "PlayerOneResult", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Player2's result in this round" }),
    __metadata("design:type", Number)
], Match.prototype, "PlayerTwoResult", void 0);
exports.Match = Match = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Match);
//# sourceMappingURL=match.entity.js.map