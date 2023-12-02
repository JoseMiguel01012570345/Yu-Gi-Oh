import { Module } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { TournamentResolver } from './tournament.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tournament } from './entities/tournament.entity';

@Module({
  providers: [TournamentResolver, TournamentService],
  imports: [
    TypeOrmModule.forFeature([Tournament])
  ]
})
export class TournamentModule {}
