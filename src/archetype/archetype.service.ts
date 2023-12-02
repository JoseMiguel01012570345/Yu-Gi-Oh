import { Injectable } from '@nestjs/common';
import { CreateArchetypeInput } from './dto/create-archetype.input';
import { UpdateArchetypeInput } from './dto/update-archetype.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Archetype } from './entities/archetype.entity';

@Injectable()
export class ArchetypeService {

  constructor(
    @InjectRepository(Archetype)
    private archetypeRepository: Repository<Archetype>
  ) { }

  async create(createArchetypeInput: CreateArchetypeInput) {
    await this.archetypeRepository.insert(createArchetypeInput);
    return createArchetypeInput;
  }

  async findAll() {
    return await this.archetypeRepository.find({});
  }

  async findOne(id: string) {
    return await this.archetypeRepository.findOneBy({ArcheTypeName: id});
  }

  async update(id: string, updateArchetypeInput: UpdateArchetypeInput) {
    await this.archetypeRepository.update({ArcheTypeName: id},updateArchetypeInput);
    return updateArchetypeInput;
  }

  async remove(id: string) {
    const archetype = await this.archetypeRepository.findOneBy({ArcheTypeName: id});
    await this.archetypeRepository.delete({ArcheTypeName: id});
    return archetype;
  }
}
