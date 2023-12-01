import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArquetypeService } from './arquetype.service';
import { CreateArquetypeDto } from './dto/create-arquetype.dto';
import { UpdateArquetypeDto } from './dto/update-arquetype.dto';

@Controller('arquetype')
export class ArquetypeController {
  constructor(private readonly arquetypeService: ArquetypeService) {}

  @Post()
  create(@Body() createArquetypeDto: CreateArquetypeDto) {
    return this.arquetypeService.create(createArquetypeDto);
  }

  @Get()
  findAll() {
    return this.arquetypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.arquetypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArquetypeDto: UpdateArquetypeDto) {
    return this.arquetypeService.update(+id, updateArquetypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.arquetypeService.remove(+id);
  }
}
