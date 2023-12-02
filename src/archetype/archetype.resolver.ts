import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ArchetypeService } from './archetype.service';
import { Archetype } from './entities/archetype.entity';
import { CreateArchetypeInput } from './dto/create-archetype.input';
import { UpdateArchetypeInput } from './dto/update-archetype.input';

@Resolver(() => Archetype)
export class ArchetypeResolver {
  constructor(private readonly archetypeService: ArchetypeService) {}

  @Mutation(() => Archetype)
  createArchetype(@Args('createArchetypeInput') createArchetypeInput: CreateArchetypeInput) {
    return this.archetypeService.create(createArchetypeInput);
  }

  @Query(() => [Archetype], { name: 'archetypes' })
  findAll() {
    return this.archetypeService.findAll();
  }

  @Query(() => Archetype, { name: 'archetype' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.archetypeService.findOne(id);
  }

  @Mutation(() => Archetype)
  updateArchetype(@Args('updateArchetypeInput') updateArchetypeInput: UpdateArchetypeInput) {
    return this.archetypeService.update(updateArchetypeInput.ArcheTypeName, updateArchetypeInput);
  }

  @Mutation(() => Archetype)
  removeArchetype(@Args('id', { type: () => Int }) id: string) {
    return this.archetypeService.remove(id);
  }
}
