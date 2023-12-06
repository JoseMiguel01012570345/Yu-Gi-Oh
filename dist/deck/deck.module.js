"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeckModule = void 0;
const common_1 = require("@nestjs/common");
const deck_service_1 = require("./deck.service");
const deck_resolver_1 = require("./deck.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const deck_entity_1 = require("./entities/deck.entity");
let DeckModule = class DeckModule {
};
exports.DeckModule = DeckModule;
exports.DeckModule = DeckModule = __decorate([
    (0, common_1.Module)({
        providers: [deck_resolver_1.DeckResolver, deck_service_1.DeckService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([deck_entity_1.Deck])
        ],
        exports: [
            deck_service_1.DeckService,
        ]
    })
], DeckModule);
//# sourceMappingURL=deck.module.js.map