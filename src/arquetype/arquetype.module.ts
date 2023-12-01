import { Module } from '@nestjs/common';
import { ArquetypeService } from './arquetype.service';
import { ArquetypeController } from './arquetype.controller';

@Module({
  controllers: [ArquetypeController],
  providers: [ArquetypeService],
})
export class ArquetypeModule {}
