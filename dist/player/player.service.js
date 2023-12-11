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
exports.PlayerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const player_entity_1 = require("./entities/player.entity");
const typeorm_2 = require("typeorm");
let PlayerService = class PlayerService {
    constructor(playerRepository) {
        this.playerRepository = playerRepository;
    }
    async create(createPlayerInput) {
        await this.playerRepository.insert(createPlayerInput);
        return createPlayerInput;
    }
    async findAll() {
        return await this.playerRepository.find({});
    }
    async findOne(id) {
        let result = await this.playerRepository.findOneBy({ PlayerName: id });
        return result;
    }
    async update(id, updatePlayerInput) {
        await this.playerRepository.update({ PlayerName: id }, updatePlayerInput);
        return updatePlayerInput;
    }
    async remove(id) {
        const player = this.playerRepository.findOneBy({ PlayerName: id });
        await this.playerRepository.delete({ PlayerName: id });
        return player;
    }
};
exports.PlayerService = PlayerService;
exports.PlayerService = PlayerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(player_entity_1.Player)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PlayerService);
//# sourceMappingURL=player.service.js.map