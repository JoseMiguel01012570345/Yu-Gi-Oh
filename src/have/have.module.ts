import { Module } from '@nestjs/common';
import { HaveService } from './have.service';
import { HaveResolver } from './have.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Has } from './entities/has.entity';

@Module({
  providers: [HaveResolver, HaveService],
  imports: [
    TypeOrmModule.forFeature([Has])
  ]
})
export class HaveModule {}
