"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HaveweakModule = void 0;
const common_1 = require("@nestjs/common");
const haveweak_service_1 = require("./haveweak.service");
const haveweak_resolver_1 = require("./haveweak.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const haveweak_entity_1 = require("./entities/haveweak.entity");
let HaveweakModule = class HaveweakModule {
};
exports.HaveweakModule = HaveweakModule;
exports.HaveweakModule = HaveweakModule = __decorate([
    (0, common_1.Module)({
        providers: [haveweak_resolver_1.HaveweakResolver, haveweak_service_1.HaveweakService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([haveweak_entity_1.Haveweak])
        ],
        exports: [
            haveweak_service_1.HaveweakService
        ]
    })
], HaveweakModule);
//# sourceMappingURL=haveweak.module.js.map