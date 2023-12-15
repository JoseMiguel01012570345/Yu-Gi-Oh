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
exports.ArchetypeInput = exports.DeckInput = exports.TournamentInput = exports.MatchInput = exports.PlayerInput = exports.DeckResponse = exports.BelongResponse = exports.SuscribeResponse = exports.PlayerResponse = exports.HasResponse = exports.PlaceResponse = exports.ArcheTypeCountResponse = exports.TournamentResponse = exports.ArcheTypeResponse = exports.ArcheTypeSearchDataResponse = exports.LocationSearchDataResponse = exports.UserDataResponse = exports.UserSearchData = exports.TournamentSearchDataResponse = exports.DeckDataResponse = exports.Response = void 0;
const graphql_1 = require("@nestjs/graphql");
const match_entity_1 = require("../../match/entities/match.entity");
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
__decorate([
    (0, graphql_1.Field)(() => [match_entity_1.Match], { description: "matches" }),
    __metadata("design:type", Array)
], Response.prototype, "matchs", void 0);
exports.Response = Response = __decorate([
    (0, graphql_1.ObjectType)()
], Response);
let DeckDataResponse = class DeckDataResponse {
};
exports.DeckDataResponse = DeckDataResponse;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Deck id' }),
    __metadata("design:type", Number)
], DeckDataResponse.prototype, "ID", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Deck name' }),
    __metadata("design:type", String)
], DeckDataResponse.prototype, "Name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Deck archetype' }),
    __metadata("design:type", String)
], DeckDataResponse.prototype, "Attribute", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { description: 'User id' }),
    __metadata("design:type", Array)
], DeckDataResponse.prototype, "UsersId", void 0);
exports.DeckDataResponse = DeckDataResponse = __decorate([
    (0, graphql_1.ObjectType)()
], DeckDataResponse);
let TournamentSearchDataResponse = class TournamentSearchDataResponse {
};
exports.TournamentSearchDataResponse = TournamentSearchDataResponse;
__decorate([
    (0, graphql_1.Field)(() => String, { description: "Tournament's name" }),
    __metadata("design:type", String)
], TournamentSearchDataResponse.prototype, "TournamentName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: "Location" }),
    __metadata("design:type", String)
], TournamentSearchDataResponse.prototype, "Location", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Tournament's date" }),
    __metadata("design:type", Number)
], TournamentSearchDataResponse.prototype, "TournamentDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: "ArcheType most used during the tournament" }),
    __metadata("design:type", String)
], TournamentSearchDataResponse.prototype, "ArcheTypeMostUsed", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: "Tournament's winner" }),
    __metadata("design:type", String)
], TournamentSearchDataResponse.prototype, "Winner", void 0);
exports.TournamentSearchDataResponse = TournamentSearchDataResponse = __decorate([
    (0, graphql_1.ObjectType)()
], TournamentSearchDataResponse);
let UserSearchData = class UserSearchData {
};
exports.UserSearchData = UserSearchData;
__decorate([
    (0, graphql_1.Field)(() => String, { description: "Player's name" }),
    __metadata("design:type", String)
], UserSearchData.prototype, "Name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Decks count' }),
    __metadata("design:type", Number)
], UserSearchData.prototype, "DecksCount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Tournaments count where he partipated' }),
    __metadata("design:type", Number)
], UserSearchData.prototype, "Participations", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Tournaments wher he has winned' }),
    __metadata("design:type", Number)
], UserSearchData.prototype, "WinnsCount", void 0);
exports.UserSearchData = UserSearchData = __decorate([
    (0, graphql_1.ObjectType)()
], UserSearchData);
let UserDataResponse = class UserDataResponse {
};
exports.UserDataResponse = UserDataResponse;
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'playername' }),
    __metadata("design:type", String)
], UserDataResponse.prototype, "ID", void 0);
__decorate([
    (0, graphql_1.Field)(() => [TournamentResponse], { description: 'Tournaments where player has participated' }),
    __metadata("design:type", Array)
], UserDataResponse.prototype, "Tournaments", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DeckDataResponse], { description: 'player decks' }),
    __metadata("design:type", Array)
], UserDataResponse.prototype, "Decks", void 0);
exports.UserDataResponse = UserDataResponse = __decorate([
    (0, graphql_1.ObjectType)()
], UserDataResponse);
let LocationSearchDataResponse = class LocationSearchDataResponse {
};
exports.LocationSearchDataResponse = LocationSearchDataResponse;
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Location' }),
    __metadata("design:type", String)
], LocationSearchDataResponse.prototype, "Location", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'ArcheType most popular' }),
    __metadata("design:type", String)
], LocationSearchDataResponse.prototype, "ArcheTypeMostMopular", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'players count in this location' }),
    __metadata("design:type", Number)
], LocationSearchDataResponse.prototype, "PlayersCount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Players winners count' }),
    __metadata("design:type", Number)
], LocationSearchDataResponse.prototype, "WinnersCount", void 0);
exports.LocationSearchDataResponse = LocationSearchDataResponse = __decorate([
    (0, graphql_1.ObjectType)()
], LocationSearchDataResponse);
let ArcheTypeSearchDataResponse = class ArcheTypeSearchDataResponse {
};
exports.ArcheTypeSearchDataResponse = ArcheTypeSearchDataResponse;
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'archetype name' }),
    __metadata("design:type", String)
], ArcheTypeSearchDataResponse.prototype, "ArcheTypeName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'most popular location' }),
    __metadata("design:type", String)
], ArcheTypeSearchDataResponse.prototype, "MostPopularRegion", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'players using it' }),
    __metadata("design:type", Number)
], ArcheTypeSearchDataResponse.prototype, "PlayersCount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'tournaments where it was used' }),
    __metadata("design:type", Number)
], ArcheTypeSearchDataResponse.prototype, "TournamentsCount", void 0);
exports.ArcheTypeSearchDataResponse = ArcheTypeSearchDataResponse = __decorate([
    (0, graphql_1.ObjectType)()
], ArcheTypeSearchDataResponse);
let ArcheTypeResponse = class ArcheTypeResponse {
};
exports.ArcheTypeResponse = ArcheTypeResponse;
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'ArcheType name id' }),
    __metadata("design:type", String)
], ArcheTypeResponse.prototype, "ArcheTypeName", void 0);
exports.ArcheTypeResponse = ArcheTypeResponse = __decorate([
    (0, graphql_1.ObjectType)()
], ArcheTypeResponse);
let TournamentResponse = class TournamentResponse {
};
exports.TournamentResponse = TournamentResponse;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Date of tournament' }),
    __metadata("design:type", Number)
], TournamentResponse.prototype, "Date", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Name of tournament' }),
    __metadata("design:type", String)
], TournamentResponse.prototype, "TournamentName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Municipio' }),
    __metadata("design:type", String)
], TournamentResponse.prototype, "Municipio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Provincia' }),
    __metadata("design:type", String)
], TournamentResponse.prototype, "Provincia", void 0);
exports.TournamentResponse = TournamentResponse = __decorate([
    (0, graphql_1.ObjectType)()
], TournamentResponse);
let ArcheTypeCountResponse = class ArcheTypeCountResponse {
};
exports.ArcheTypeCountResponse = ArcheTypeCountResponse;
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Acrhetype id' }),
    __metadata("design:type", String)
], ArcheTypeCountResponse.prototype, "ArcheTypeName", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Count of the archetype winner' }),
    __metadata("design:type", Number)
], ArcheTypeCountResponse.prototype, "Count", void 0);
exports.ArcheTypeCountResponse = ArcheTypeCountResponse = __decorate([
    (0, graphql_1.ObjectType)()
], ArcheTypeCountResponse);
let PlaceResponse = class PlaceResponse {
};
exports.PlaceResponse = PlaceResponse;
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'The place result of the search' }),
    __metadata("design:type", String)
], PlaceResponse.prototype, "Place", void 0);
exports.PlaceResponse = PlaceResponse = __decorate([
    (0, graphql_1.ObjectType)()
], PlaceResponse);
let HasResponse = class HasResponse {
};
exports.HasResponse = HasResponse;
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Player id' }),
    __metadata("design:type", String)
], HasResponse.prototype, "PlayerID", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Deck id' }),
    __metadata("design:type", Number)
], HasResponse.prototype, "DeckID", void 0);
exports.HasResponse = HasResponse = __decorate([
    (0, graphql_1.ObjectType)()
], HasResponse);
let PlayerResponse = class PlayerResponse {
};
exports.PlayerResponse = PlayerResponse;
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Player id' }),
    __metadata("design:type", String)
], PlayerResponse.prototype, "PlayerName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Player password' }),
    __metadata("design:type", String)
], PlayerResponse.prototype, "PlayerPassword", void 0);
exports.PlayerResponse = PlayerResponse = __decorate([
    (0, graphql_1.ObjectType)()
], PlayerResponse);
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
let DeckResponse = class DeckResponse {
};
exports.DeckResponse = DeckResponse;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Deck ID' }),
    __metadata("design:type", Number)
], DeckResponse.prototype, "DeckID", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: "Deck's name" }),
    __metadata("design:type", String)
], DeckResponse.prototype, "DeckName", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Main deck cards count" }),
    __metadata("design:type", Number)
], DeckResponse.prototype, "MainDeckCount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Side deck cards count" }),
    __metadata("design:type", Number)
], DeckResponse.prototype, "SideDeckCount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Extra deck cards count" }),
    __metadata("design:type", Number)
], DeckResponse.prototype, "ExtraDeckCount", void 0);
exports.DeckResponse = DeckResponse = __decorate([
    (0, graphql_1.ObjectType)()
], DeckResponse);
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
__decorate([
    (0, graphql_1.Field)(() => String, { description: "Usre's roll" }),
    __metadata("design:type", String)
], PlayerInput.prototype, "Roll", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Municipio' }),
    __metadata("design:type", String)
], PlayerInput.prototype, "Municipio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Provincia' }),
    __metadata("design:type", String)
], PlayerInput.prototype, "Provincia", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Telefono' }),
    __metadata("design:type", Number)
], PlayerInput.prototype, "Tel", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Direccion' }),
    __metadata("design:type", String)
], PlayerInput.prototype, "Dir", void 0);
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
    (0, graphql_1.InputType)()
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