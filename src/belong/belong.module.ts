import { Module } from '@nestjs/common';
import { BelongService } from './belong.service';
import { BelongResolver } from './belong.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Belong } from './entities/belong.entity';

@Module({
  providers: [BelongResolver, BelongService],
  imports: [
    TypeOrmModule.forFeature([Belong])
  ]
})
export class BelongModule {}
