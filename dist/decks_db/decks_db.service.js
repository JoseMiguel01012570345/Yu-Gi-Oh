"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecksDbService = void 0;
const common_1 = require("@nestjs/common");
let DecksDbService = class DecksDbService {
    create(createDecksDbDto) {
        return 'This action adds a new decksDb';
    }
    findAll() {
        return `This action returns all decksDb`;
    }
    findOne(id) {
        return `This action returns a #${id} decksDb`;
    }
    update(id, updateDecksDbDto) {
        return `This action updates a #${id} decksDb`;
    }
    remove(id) {
        return `This action removes a #${id} decksDb`;
    }
};
exports.DecksDbService = DecksDbService;
exports.DecksDbService = DecksDbService = __decorate([
    (0, common_1.Injectable)()
], DecksDbService);
//# sourceMappingURL=decks_db.service.js.map