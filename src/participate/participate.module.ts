import { Module } from '@nestjs/common';
import { ParticipateService } from './participate.service';
import { ParticipateResolver } from './participate.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Participate } from './entities/participate.entity';

@Module({
  providers: [ParticipateResolver, ParticipateService],
  imports: [
    TypeOrmModule.forFeature([Participate])
  ],
  exports: [
    ParticipateService
  ]
})
export class ParticipateModule {}
