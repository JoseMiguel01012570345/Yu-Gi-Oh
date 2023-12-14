import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TestModule } from './test/test.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerModule } from './player/player.module';
import { DeckModule } from './deck/deck.module';
import { TournamentModule } from './tournament/tournament.module';
import { ArchetypeModule } from './archetype/archetype.module';
import { MatchModule } from './match/match.module';
import { BelongModule } from './belong/belong.module';
import { HaveModule } from './have/have.module';
import { SuscribeModule } from './suscribe/suscribe.module';
import { HaveweakModule } from './haveweak/haveweak.module';
import { ParticipateModule } from './participate/participate.module';
import { ManagerModule } from './manager/manager.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'science',
        database: 'YuGiOhDB',
        entities: [],
        synchronize: true,
        autoLoadEntities:true
      }),
  }),
    TestModule,
    PlayerModule,
    DeckModule,
    TournamentModule,
    ArchetypeModule,
    MatchModule,
    BelongModule,
    HaveModule,
    SuscribeModule,
    HaveweakModule,
    ParticipateModule,
    ManagerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
