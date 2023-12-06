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
exports.ArchetypeInput = exports.DeckInput = exports.TournamentInput = exports.MatchInput = exports.PlayerInput = exports.BelongResponse = exports.SuscribeResponse = exports.Response = void 0;
const graphql_1 = require("@nestjs/graphql");
let Response = class Response {
};
exports.Response = Response;
__decorate([
    (0, graphql_1.Field)(() => String, { description: "status" }),
    __metadata("design:type", String)
], Response.prototype, "Status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: "message" }),
    __metadata("design:type", String)
], Response.prototype, "Message", void 0);
exports.Response = Response = __decorate([
    (0, graphql_1.ObjectType)()
], Response);
let SuscribeResponse = class SuscribeResponse {
};
exports.SuscribeResponse = SuscribeResponse;
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Player id' }),
    __metadata("design:type", String)
], SuscribeResponse.prototype, "PlayerID", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Deck id" }),
    __metadata("design:type", Number)
], SuscribeResponse.prototype, "DeckID", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Tournament date" }),
    __metadata("design:type", Number)
], SuscribeResponse.prototype, "TournamentDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: "Tournament name" }),
    __metadata("design:type", String)
], SuscribeResponse.prototype, "TournamentName", void 0);
exports.SuscribeResponse = SuscribeResponse = __decorate([
    (0, graphql_1.ObjectType)()
], SuscribeResponse);
let BelongResponse = class BelongResponse {
};
exports.BelongResponse = BelongResponse;
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Archetype id' }),
    __metadata("design:type", String)
], BelongResponse.prototype, "ArcheTypeID", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Deck id" }),
    __metadata("design:type", Number)
], BelongResponse.prototype, "DeckID", void 0);
exports.BelongResponse = BelongResponse = __decorate([
    (0, graphql_1.ObjectType)()
], BelongResponse);
let PlayerInput = class PlayerInput {
};
exports.PlayerInput = PlayerInput;
__decorate([
    (0, graphql_1.Field)(() => String, { description: "Players id" }),
    __metadata("design:type", String)
], PlayerInput.prototype, "PlayerName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: "Player password" }),
    __metadata("design:type", String)
], PlayerInput.prototype, "PlayerPassword", void 0);
exports.PlayerInput = PlayerInput = __decorate([
    (0, graphql_1.InputType)()
], PlayerInput);
let MatchInput = class MatchInput {
};
exports.MatchInput = MatchInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Match id" }),
    __metadata("design:type", Number)
], MatchInput.prototype, "MatchID", void 0);
exports.MatchInput = MatchInput = __decorate([
    (0, graphql_1.InputType)()
], MatchInput);
let TournamentInput = class TournamentInput {
};
exports.TournamentInput = TournamentInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Tournament date" }),
    __metadata("design:type", Number)
], TournamentInput.prototype, "TournamentDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: "Tournament name" }),
    __metadata("design:type", String)
], TournamentInput.prototype, "TournamentName", void 0);
exports.TournamentInput = TournamentInput = __decorate([
    (0, graphql_1.InputType)()
], TournamentInput);
let DeckInput = class DeckInput {
};
exports.DeckInput = DeckInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Deck ID' }),
    __metadata("design:type", Number)
], DeckInput.prototype, "DeckID", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: "Deck's name" }),
    __metadata("design:type", String)
], DeckInput.prototype, "DeckName", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Main deck cards count" }),
    __metadata("design:type", Number)
], DeckInput.prototype, "MainDeckCount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Side deck cards count" }),
    __metadata("design:type", Number)
], DeckInput.prototype, "SideDeckCount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Extra deck cards count" }),
    __metadata("design:type", Number)
], DeckInput.prototype, "ExtraDeckCount", void 0);
exports.DeckInput = DeckInput = __decorate([
    (0, graphql_1.InputType)(),
    (0, graphql_1.ObjectType)()
], DeckInput);
let ArchetypeInput = class ArchetypeInput {
};
exports.ArchetypeInput = ArchetypeInput;
__decorate([
    (0, graphql_1.Field)(() => String, { description: "ArcheType's name" }),
    __metadata("design:type", String)
], ArchetypeInput.prototype, "ArcheTypeName", void 0);
exports.ArchetypeInput = ArchetypeInput = __decorate([
    (0, graphql_1.InputType)()
], ArchetypeInput);
//# sourceMappingURL=create-manager.input.js.map