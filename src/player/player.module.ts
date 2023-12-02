import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerResolver } from './player.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';

@Module({
  providers: [PlayerResolver, PlayerService],
  imports:[
    TypeOrmModule.forFeature([Player])
  ]
})
export class PlayerModule {}
