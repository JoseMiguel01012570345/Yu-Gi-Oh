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
const data_base_module_1 = require("./data-base/data-base.module");
const cards_controller_1 = require("./cards/cards.controller");
const cards_service_1 = require("./cards/cards.service");
const decks_controller_1 = require("./decks/decks.controller");
const decks_service_1 = require("./decks/decks.service");
const tournaments_controller_1 = require("./tournaments/tournaments.controller");
const tournaments_service_1 = require("./tournaments/tournaments.service");
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
            test_module_1.TestModule,
            data_base_module_1.DataBaseModule
        ],
        controllers: [app_controller_1.AppController, cards_controller_1.CardsController, decks_controller_1.DecksController, tournaments_controller_1.TournamentsController],
        providers: [app_service_1.AppService, cards_service_1.CardsService, decks_service_1.DecksService, tournaments_service_1.TournamentsService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map