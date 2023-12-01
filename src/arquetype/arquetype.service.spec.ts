import { Test, TestingModule } from '@nestjs/testing';
import { ArquetypeService } from './arquetype.service';

describe('ArquetypeService', () => {
  let service: ArquetypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArquetypeService],
    }).compile();

    service = module.get<ArquetypeService>(ArquetypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
