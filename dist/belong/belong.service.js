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
exports.BelongService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const belong_entity_1 = require("./entities/belong.entity");
let BelongService = class BelongService {
    constructor(belongRepository) {
        this.belongRepository = belongRepository;
    }
    async create(createBelongInput) {
        await this.belongRepository.insert(createBelongInput);
        return createBelongInput;
    }
    async findAll() {
        return await this.belongRepository.find({});
    }
    async findOne(id) {
        const deckid = id.split('<-->')[0];
        const archetypeid = id.split('<-->')[1];
        return await this.belongRepository.findOneBy({ DeckID: parseInt(deckid), ArcheTypeID: parseInt(archetypeid) });
    }
    async update(deckid, archetypeid, updateBelongInput) {
        await this.belongRepository.update({ DeckID: deckid, ArcheTypeID: archetypeid }, updateBelongInput);
        return updateBelongInput;
    }
    async remove(id) {
        const deckid = id.split('<-->')[0];
        const archetypeid = id.split('<-->')[1];
        const result = await this.belongRepository.findOneBy({ DeckID: parseInt(deckid), ArcheTypeID: parseInt(archetypeid) });
        await this.belongRepository.delete({ DeckID: parseInt(deckid), ArcheTypeID: parseInt(archetypeid) });
        return result;
    }
};
exports.BelongService = BelongService;
exports.BelongService = BelongService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(belong_entity_1.Belong)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BelongService);
//# sourceMappingURL=belong.service.js.map