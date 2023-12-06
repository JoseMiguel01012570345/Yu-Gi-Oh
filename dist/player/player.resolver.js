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
exports.PlayerResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const player_service_1 = require("./player.service");
const player_entity_1 = require("./entities/player.entity");
const create_player_input_1 = require("./dto/create-player.input");
const update_player_input_1 = require("./dto/update-player.input");
let PlayerResolver = class PlayerResolver {
    constructor(playerService) {
        this.playerService = playerService;
    }
    createPlayer(createPlayerInput) {
        return this.playerService.create(createPlayerInput);
    }
    findAll() {
        return this.playerService.findAll();
    }
    findOne(id) {
        return this.playerService.findOne(id);
    }
    updatePlayer(updatePlayerInput) {
        return this.playerService.update(updatePlayerInput.PlayerName, updatePlayerInput);
    }
    removePlayer(id) {
        return this.playerService.remove(id);
    }
};
exports.PlayerResolver = PlayerResolver;
__decorate([
    (0, graphql_1.Mutation)(() => player_entity_1.Player),
    __param(0, (0, graphql_1.Args)('createPlayerInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_player_input_1.CreatePlayerInput]),
    __metadata("design:returntype", void 0)
], PlayerResolver.prototype, "createPlayer", null);
__decorate([
    (0, graphql_1.Query)(() => [player_entity_1.Player], { name: 'players' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlayerResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => player_entity_1.Player, { name: 'player' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayerResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => player_entity_1.Player),
    __param(0, (0, graphql_1.Args)('updatePlayerInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_player_input_1.UpdatePlayerInput]),
    __metadata("design:returntype", void 0)
], PlayerResolver.prototype, "updatePlayer", null);
__decorate([
    (0, graphql_1.Mutation)(() => player_entity_1.Player),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayerResolver.prototype, "removePlayer", null);
exports.PlayerResolver = PlayerResolver = __decorate([
    (0, graphql_1.Resolver)(() => player_entity_1.Player),
    __metadata("design:paramtypes", [player_service_1.PlayerService])
], PlayerResolver);
//# sourceMappingURL=player.resolver.js.map