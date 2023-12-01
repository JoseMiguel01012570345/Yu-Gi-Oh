import { Test, TestingModule } from '@nestjs/testing';
import { DeckArquetypeService } from './deck-arquetype.service';

describe('DeckArquetypeService', () => {
  let service: DeckArquetypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeckArquetypeService],
    }).compile();

    service = module.get<DeckArquetypeService>(DeckArquetypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
