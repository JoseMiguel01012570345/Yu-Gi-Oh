"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipateModule = void 0;
const common_1 = require("@nestjs/common");
const participate_service_1 = require("./participate.service");
const participate_resolver_1 = require("./participate.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const participate_entity_1 = require("./entities/participate.entity");
let ParticipateModule = class ParticipateModule {
};
exports.ParticipateModule = ParticipateModule;
exports.ParticipateModule = ParticipateModule = __decorate([
    (0, common_1.Module)({
        providers: [participate_resolver_1.ParticipateResolver, participate_service_1.ParticipateService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([participate_entity_1.Participate])
        ],
        exports: [
            participate_service_1.ParticipateService
        ]
    })
], ParticipateModule);
//# sourceMappingURL=participate.module.js.map