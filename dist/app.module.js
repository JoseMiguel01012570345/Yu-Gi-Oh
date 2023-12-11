"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const test_module_1 = require("./test/test.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const player_module_1 = require("./player/player.module");
const deck_module_1 = require("./deck/deck.module");
const tournament_module_1 = require("./tournament/tournament.module");
const archetype_module_1 = require("./archetype/archetype.module");
const match_module_1 = require("./match/match.module");
const belong_module_1 = require("./belong/belong.module");
const have_module_1 = require("./have/have.module");
const suscribe_module_1 = require("./suscribe/suscribe.module");
const haveweak_module_1 = require("./haveweak/haveweak.module");
const participate_module_1 = require("./participate/participate.module");
const manager_module_1 = require("./manager/manager.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                playground: true,
                autoSchemaFile: 'schema.gql',
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: () => ({
                    type: 'mariadb',
                    host: '127.0.0.1',
                    port: 3306,
                    username: 'root',
                    password: 'family',
                    database: 'YuGiOhDB',
                    entities: [],
                    synchronize: true,
                    autoLoadEntities: true
                }),
            }),
            test_module_1.TestModule,
            player_module_1.PlayerModule,
            deck_module_1.DeckModule,
            tournament_module_1.TournamentModule,
            archetype_module_1.ArchetypeModule,
            match_module_1.MatchModule,
            belong_module_1.BelongModule,
            have_module_1.HaveModule,
            suscribe_module_1.SuscribeModule,
            haveweak_module_1.HaveweakModule,
            participate_module_1.ParticipateModule,
            manager_module_1.ManagerModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map