import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DecksDbService } from './decks_db.service';
import { CreateDecksDbDto } from './dto/create-decks_db.dto';
import { UpdateDecksDbDto } from './dto/update-decks_db.dto';

@Controller('decks-db')
export class DecksDbController {
  constructor(private readonly decksDbService: DecksDbService) {}

  @Post()
  create(@Body() createDecksDbDto: CreateDecksDbDto) {
    return this.decksDbService.create(createDecksDbDto);
  }

  @Get()
  findAll() {
    return this.decksDbService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.decksDbService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDecksDbDto: UpdateDecksDbDto) {
    return this.decksDbService.update(+id, updateDecksDbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.decksDbService.remove(+id);
  }
}
