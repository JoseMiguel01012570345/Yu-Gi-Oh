import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeckArquetypeService } from './deck-arquetype.service';
import { CreateDeckArquetypeDto } from './dto/create-deck-arquetype.dto';
import { UpdateDeckArquetypeDto } from './dto/update-deck-arquetype.dto';

@Controller('deck-arquetype')
export class DeckArquetypeController {
  constructor(private readonly deckArquetypeService: DeckArquetypeService) {}

  @Post()
  create(@Body() createDeckArquetypeDto: CreateDeckArquetypeDto) {
    return this.deckArquetypeService.create(createDeckArquetypeDto);
  }

  @Get()
  findAll() {
    return this.deckArquetypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deckArquetypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeckArquetypeDto: UpdateDeckArquetypeDto) {
    return this.deckArquetypeService.update(+id, updateDeckArquetypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deckArquetypeService.remove(+id);
  }
}
