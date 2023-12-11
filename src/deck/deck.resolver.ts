import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DeckService } from './deck.service';
import { Deck } from './entities/deck.entity';
import { CreateDeckInput, CreateDeckResponse } from './dto/create-deck.input';
import { UpdateDeckInput } from './dto/update-deck.input';

@Resolver(() => Deck)
export class DeckResolver {
  constructor(private readonly deckService: DeckService) { }

  @Mutation(() => CreateDeckResponse)
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

  @Query(() => [Deck], { name: 'decksByName' })
  findDecksByName(@Args('name', { type: () => String }) deckName: string) {
    return this.deckService.getDecksByName(deckName);
  }

  @Query(() => [Deck], { name: 'decksByMainDeckCount' })
  findeDecksByMainDeckCount(@Args('count', { type: () => Int }) count: number) {
    return this.deckService.getDecksByMainDeckCount(count);
  }

  @Query(() => [Deck], { name: 'decksBySideDeckCount' })
  findDecksBySideDeckCount(@Args('count', { type: () => Int }) count: number) {
    return this.deckService.getDecksBySideDeckCount(count);
  }

  @Query(() => [Deck], { name: 'decksByExtraDeckCount' })
  findDecksByExtraDeckCount(@Args('count', { type: () => Int }) count: number) {
    return this.deckService.getDecksByExtraDeckCount(count);
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
