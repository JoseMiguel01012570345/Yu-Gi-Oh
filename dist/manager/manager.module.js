"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerModule = void 0;
const common_1 = require("@nestjs/common");
const manager_service_1 = require("./manager.service");
const manager_resolver_1 = require("./manager.resolver");
const participate_module_1 = require("../participate/participate.module");
const haveweak_module_1 = require("../haveweak/haveweak.module");
const archetype_module_1 = require("../archetype/archetype.module");
const deck_module_1 = require("../deck/deck.module");
const player_module_1 = require("../player/player.module");
const have_module_1 = require("../have/have.module");
const belong_module_1 = require("../belong/belong.module");
const suscribe_module_1 = require("../suscribe/suscribe.module");
const tournament_module_1 = require("../tournament/tournament.module");
const match_module_1 = require("../match/match.module");
let ManagerModule = class ManagerModule {
};
exports.ManagerModule = ManagerModule;
exports.ManagerModule = ManagerModule = __decorate([
    (0, common_1.Module)({
        providers: [manager_resolver_1.ManagerResolver, manager_service_1.ManagerService],
        imports: [
            participate_module_1.ParticipateModule,
            haveweak_module_1.HaveweakModule,
            archetype_module_1.ArchetypeModule,
            deck_module_1.DeckModule,
            player_module_1.PlayerModule,
            have_module_1.HaveModule,
            belong_module_1.BelongModule,
            suscribe_module_1.SuscribeModule,
            tournament_module_1.TournamentModule,
            match_module_1.MatchModule
        ]
    })
], ManagerModule);
//# sourceMappingURL=manager.module.js.map