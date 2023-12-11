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
exports.HaveService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const has_entity_1 = require("./entities/has.entity");
const typeorm_2 = require("typeorm");
let HaveService = class HaveService {
    constructor(hasRepository) {
        this.hasRepository = hasRepository;
    }
    async create(createHasInput) {
        await this.hasRepository.insert(createHasInput);
        return createHasInput;
    }
    async findAll() {
        return await this.hasRepository.find({});
    }
    async findOne(deckid, playerid) {
        return await this.hasRepository.findOneBy({ DeckID: deckid, PlayerID: playerid });
    }
    async getDecksByPlayer(player) {
        return await this.hasRepository.findBy({ PlayerID: player });
    }
    async getPlayersByDeck(deckid) {
        return await this.hasRepository.findBy({ DeckID: deckid });
    }
    async getPlayersOrderedByDeckCount() {
        return await this.hasRepository.query('SELECT PlayerID FROM has GROUP BY PlayerID ORDER BY COUNT(PlayerID) DESC');
    }
    async update(deckid, playerid, updateHasInput) {
        await this.hasRepository.update({ DeckID: deckid, PlayerID: playerid }, updateHasInput);
        return updateHasInput;
    }
    async remove(deckid, playerid) {
        const result = await this.hasRepository.findOneBy({ DeckID: deckid, PlayerID: playerid });
        await this.hasRepository.delete({ DeckID: deckid, PlayerID: playerid });
        return result;
    }
};
exports.HaveService = HaveService;
exports.HaveService = HaveService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(has_entity_1.Has)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HaveService);
//# sourceMappingURL=have.service.js.map