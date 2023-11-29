"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecksDbModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const decks_db_service_1 = require("./decks_db.service");
const decks_db_controller_1 = require("./decks_db.controller");
const decks_db_entity_1 = require("./entities/decks_db.entity");
let DecksDbModule = class DecksDbModule {
};
exports.DecksDbModule = DecksDbModule;
exports.DecksDbModule = DecksDbModule = __decorate([
    (0, common_1.Module)({
        controllers: [decks_db_controller_1.DecksDbController],
        providers: [decks_db_service_1.DecksDbService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([decks_db_entity_1.DecksDb])
        ]
    })
], DecksDbModule);
//# sourceMappingURL=decks_db.module.js.map