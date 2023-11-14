import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TestModule } from './test/test.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataBaseModule } from './data-base/data-base.module';
import { CardsController } from './cards/cards.controller';
import { CardsService } from './cards/cards.service';
import { DecksController } from './decks/decks.controller';
import { DecksService } from './decks/decks.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
    TestModule,
    DataBaseModule
  ],
  controllers: [AppController, CardsController, DecksController],
  providers: [AppService, CardsService, DecksService],
})
export class AppModule { }
