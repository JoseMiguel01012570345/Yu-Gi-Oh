"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BelongModule = void 0;
const common_1 = require("@nestjs/common");
const belong_service_1 = require("./belong.service");
const belong_resolver_1 = require("./belong.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const belong_entity_1 = require("./entities/belong.entity");
let BelongModule = class BelongModule {
};
exports.BelongModule = BelongModule;
exports.BelongModule = BelongModule = __decorate([
    (0, common_1.Module)({
        providers: [belong_resolver_1.BelongResolver, belong_service_1.BelongService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([belong_entity_1.Belong])
        ]
    })
], BelongModule);
//# sourceMappingURL=belong.module.js.map