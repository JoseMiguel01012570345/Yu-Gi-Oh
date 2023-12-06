"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuscribeModule = void 0;
const common_1 = require("@nestjs/common");
const suscribe_service_1 = require("./suscribe.service");
const suscribe_resolver_1 = require("./suscribe.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const suscribe_entity_1 = require("./entities/suscribe.entity");
let SuscribeModule = class SuscribeModule {
};
exports.SuscribeModule = SuscribeModule;
exports.SuscribeModule = SuscribeModule = __decorate([
    (0, common_1.Module)({
        providers: [suscribe_resolver_1.SuscribeResolver, suscribe_service_1.SuscribeService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([suscribe_entity_1.Suscribe])
        ],
        exports: [
            suscribe_service_1.SuscribeService
        ]
    })
], SuscribeModule);
//# sourceMappingURL=suscribe.module.js.map