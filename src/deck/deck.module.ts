import { Module } from '@nestjs/common';
import { DeckService } from './deck.service';
import { DeckResolver } from './deck.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deck } from './entities/deck.entity';

@Module({
  providers: [DeckResolver, DeckService],
  imports: [
    TypeOrmModule.forFeature([Deck])
  ],
  exports: [
    DeckService,
  ]
})
export class DeckModule {}
