import { Test, TestingModule } from '@nestjs/testing';
import { PlayerDeckService } from './player-deck.service';

describe('PlayerDeckService', () => {
  let service: PlayerDeckService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerDeckService],
    }).compile();

    service = module.get<PlayerDeckService>(PlayerDeckService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
