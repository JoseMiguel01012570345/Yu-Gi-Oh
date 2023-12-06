import { Module } from '@nestjs/common';
import { HaveweakService } from './haveweak.service';
import { HaveweakResolver } from './haveweak.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Haveweak } from './entities/haveweak.entity';

@Module({
  providers: [HaveweakResolver, HaveweakService],
  imports: [
    TypeOrmModule.forFeature([Haveweak])
  ],
  exports: [
    HaveweakService
  ]
})
export class HaveweakModule {}
