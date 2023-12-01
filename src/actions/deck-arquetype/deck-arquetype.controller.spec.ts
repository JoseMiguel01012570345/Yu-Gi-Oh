import { Test, TestingModule } from '@nestjs/testing';
import { DeckArquetypeController } from './deck-arquetype.controller';
import { DeckArquetypeService } from './deck-arquetype.service';

describe('DeckArquetypeController', () => {
  let controller: DeckArquetypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeckArquetypeController],
      providers: [DeckArquetypeService],
    }).compile();

    controller = module.get<DeckArquetypeController>(DeckArquetypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
