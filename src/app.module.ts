import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { TestModule } from "./test/test.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DataBaseModule } from "./data-base/data-base.module";
import { CardsController } from "./cards/cards.controller";
import { CardsService } from "./cards/cards.service";
import { DecksController } from "./decks/decks.controller";
import { DecksService } from "./decks/decks.service";
import { TournamentsController } from "./tournaments/tournaments.controller";
import { TournamentsService } from "./tournaments/tournaments.service";
import { DecksDbModule } from "./decks_db/decks_db.module";

@Module({
  imports: [
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   playground: true,
    //   autoSchemaFile: 'schema.gql',
    // }),
    TestModule,
    DataBaseModule,
    DecksDbModule,
  ],
  controllers: [
    AppController,
    CardsController,
    DecksController,
    TournamentsController,
  ],
  providers: [AppService, CardsService, DecksService, TournamentsService],
})
export class AppModule {}
