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
exports.DecksDbController = void 0;
const common_1 = require("@nestjs/common");
const decks_db_service_1 = require("./decks_db.service");
const create_decks_db_dto_1 = require("./dto/create-decks_db.dto");
const update_decks_db_dto_1 = require("./dto/update-decks_db.dto");
let DecksDbController = class DecksDbController {
    constructor(decksDbService) {
        this.decksDbService = decksDbService;
    }
    create(createDecksDbDto) {
        return this.decksDbService.create(createDecksDbDto);
    }
    findAll() {
        return this.decksDbService.findAll();
    }
    findOne(id) {
        return this.decksDbService.findOne(+id);
    }
    update(id, updateDecksDbDto) {
        return this.decksDbService.update(+id, updateDecksDbDto);
    }
    remove(id) {
        return this.decksDbService.remove(+id);
    }
};
exports.DecksDbController = DecksDbController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_decks_db_dto_1.CreateDecksDbDto]),
    __metadata("design:returntype", void 0)
], DecksDbController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DecksDbController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DecksDbController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_decks_db_dto_1.UpdateDecksDbDto]),
    __metadata("design:returntype", void 0)
], DecksDbController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DecksDbController.prototype, "remove", null);
exports.DecksDbController = DecksDbController = __decorate([
    (0, common_1.Controller)('decks-db'),
    __metadata("design:paramtypes", [decks_db_service_1.DecksDbService])
], DecksDbController);
//# sourceMappingURL=decks_db.controller.js.map