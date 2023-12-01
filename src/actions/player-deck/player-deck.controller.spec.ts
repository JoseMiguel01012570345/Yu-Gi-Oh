import { Test, TestingModule } from '@nestjs/testing';
import { PlayerDeckController } from './player-deck.controller';
import { PlayerDeckService } from './player-deck.service';

describe('PlayerDeckController', () => {
  let controller: PlayerDeckController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerDeckController],
      providers: [PlayerDeckService],
    }).compile();

    controller = module.get<PlayerDeckController>(PlayerDeckController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
