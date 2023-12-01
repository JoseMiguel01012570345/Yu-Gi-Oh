import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerModule } from './player/player.module';
import { DeckModule } from './deck/deck.module';
import { TournamentModule } from './tournament/tournament.module';
import { GameModule } from './game/game.module';
import { ArquetypeModule } from './arquetype/arquetype.module';
import { ParticipateModule } from './participate/participate.module';

@Module({
  imports: [PlayerModule, DeckModule, TournamentModule, GameModule, ArquetypeModule, ParticipateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
