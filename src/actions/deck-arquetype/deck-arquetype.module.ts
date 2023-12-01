import { Module } from '@nestjs/common';
import { DeckArquetypeService } from './deck-arquetype.service';
import { DeckArquetypeController } from './deck-arquetype.controller';

@Module({
  controllers: [DeckArquetypeController],
  providers: [DeckArquetypeService],
})
export class DeckArquetypeModule {}
