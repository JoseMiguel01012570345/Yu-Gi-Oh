import { Module } from '@nestjs/common';
import { SuscribeService } from './suscribe.service';
import { SuscribeResolver } from './suscribe.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Suscribe } from './entities/suscribe.entity';

@Module({
  providers: [SuscribeResolver, SuscribeService],
  imports: [
    TypeOrmModule.forFeature([Suscribe])
  ],
  exports: [
    SuscribeService
  ]
})
export class SuscribeModule {}
