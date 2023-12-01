import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParticipateService } from './participate.service';
import { CreateParticipateDto } from './dto/create-participate.dto';
import { UpdateParticipateDto } from './dto/update-participate.dto';

@Controller('participate')
export class ParticipateController {
  constructor(private readonly participateService: ParticipateService) {}

  @Post()
  create(@Body() createParticipateDto: CreateParticipateDto) {
    return this.participateService.create(createParticipateDto);
  }

  @Get()
  findAll() {
    return this.participateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.participateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParticipateDto: UpdateParticipateDto) {
    return this.participateService.update(+id, updateParticipateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.participateService.remove(+id);
  }
}
