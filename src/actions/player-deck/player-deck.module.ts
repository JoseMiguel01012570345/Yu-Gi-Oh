import { Module } from '@nestjs/common';
import { PlayerDeckService } from './player-deck.service';
import { PlayerDeckController } from './player-deck.controller';

@Module({
  controllers: [PlayerDeckController],
  providers: [PlayerDeckService],
})
export class PlayerDeckModule {}
