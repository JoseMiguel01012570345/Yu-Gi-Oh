import { Module } from '@nestjs/common';
import { ParticipateService } from './participate.service';
import { ParticipateController } from './participate.controller';

@Module({
  controllers: [ParticipateController],
  providers: [ParticipateService],
})
export class ParticipateModule {}
