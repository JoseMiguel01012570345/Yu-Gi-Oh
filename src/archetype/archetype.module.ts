import { Module } from '@nestjs/common';
import { ArchetypeService } from './archetype.service';
import { ArchetypeResolver } from './archetype.resolver';
import { Archetype } from './entities/archetype.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [ArchetypeResolver, ArchetypeService],
  imports:[
    TypeOrmModule.forFeature([Archetype])
  ]
})
export class ArchetypeModule {}
