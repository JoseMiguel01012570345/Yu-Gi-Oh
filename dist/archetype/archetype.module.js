"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchetypeModule = void 0;
const common_1 = require("@nestjs/common");
const archetype_service_1 = require("./archetype.service");
const archetype_resolver_1 = require("./archetype.resolver");
const archetype_entity_1 = require("./entities/archetype.entity");
const typeorm_1 = require("@nestjs/typeorm");
let ArchetypeModule = class ArchetypeModule {
};
exports.ArchetypeModule = ArchetypeModule;
exports.ArchetypeModule = ArchetypeModule = __decorate([
    (0, common_1.Module)({
        providers: [archetype_resolver_1.ArchetypeResolver, archetype_service_1.ArchetypeService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([archetype_entity_1.Archetype])
        ],
        exports: [
            archetype_service_1.ArchetypeService
        ]
    })
], ArchetypeModule);
//# sourceMappingURL=archetype.module.js.map