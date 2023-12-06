"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HaveModule = void 0;
const common_1 = require("@nestjs/common");
const have_service_1 = require("./have.service");
const have_resolver_1 = require("./have.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const has_entity_1 = require("./entities/has.entity");
let HaveModule = class HaveModule {
};
exports.HaveModule = HaveModule;
exports.HaveModule = HaveModule = __decorate([
    (0, common_1.Module)({
        providers: [have_resolver_1.HaveResolver, have_service_1.HaveService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([has_entity_1.Has])
        ],
        exports: [
            have_service_1.HaveService
        ]
    })
], HaveModule);
//# sourceMappingURL=have.module.js.map