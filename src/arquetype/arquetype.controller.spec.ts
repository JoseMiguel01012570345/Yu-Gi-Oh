import { Test, TestingModule } from '@nestjs/testing';
import { ArquetypeController } from './arquetype.controller';
import { ArquetypeService } from './arquetype.service';

describe('ArquetypeController', () => {
  let controller: ArquetypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArquetypeController],
      providers: [ArquetypeService],
    }).compile();

    controller = module.get<ArquetypeController>(ArquetypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
