import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerDeckService } from './player-deck.service';
import { CreatePlayerDeckDto } from './dto/create-player-deck.dto';
import { UpdatePlayerDeckDto } from './dto/update-player-deck.dto';

@Controller('player-deck')
export class PlayerDeckController {
  constructor(private readonly playerDeckService: PlayerDeckService) {}

  @Post()
  create(@Body() createPlayerDeckDto: CreatePlayerDeckDto) {
    return this.playerDeckService.create(createPlayerDeckDto);
  }

  @Get()
  findAll() {
    return this.playerDeckService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerDeckService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerDeckDto: UpdatePlayerDeckDto) {
    return this.playerDeckService.update(+id, updatePlayerDeckDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerDeckService.remove(+id);
  }
}
