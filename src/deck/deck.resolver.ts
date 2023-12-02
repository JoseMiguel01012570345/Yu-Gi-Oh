import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DeckService } from './deck.service';
import { Deck } from './entities/deck.entity';
import { CreateDeckInput } from './dto/create-deck.input';
import { UpdateDeckInput } from './dto/update-deck.input';

@Resolver(() => Deck)
export class DeckResolver {
  constructor(private readonly deckService: DeckService) {}

  @Mutation(() => Deck)
  createDeck(@Args('createDeckInput') createDeckInput: CreateDeckInput) {
    return this.deckService.create(createDeckInput);
  }

  @Query(() => [Deck], { name: 'decks' })
  findAll() {
    return this.deckService.findAll();
  }

  @Query(() => Deck, { name: 'deck' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.deckService.findOne(id);
  }

  @Mutation(() => Deck)
  updateDeck(@Args('updateDeckInput') updateDeckInput: UpdateDeckInput) {
    return this.deckService.update(updateDeckInput.DeckID, updateDeckInput);
  }

  @Mutation(() => Deck)
  removeDeck(@Args('id', { type: () => Int }) id: number) {
    return this.deckService.remove(id);
  }
}
