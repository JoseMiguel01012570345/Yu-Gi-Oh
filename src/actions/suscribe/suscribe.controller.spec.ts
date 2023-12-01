import { Test, TestingModule } from "@nestjs/testing";
import { SuscribeController } from "./suscribe.controller";
import { SuscribeService } from "./suscribe.service";

describe("SuscribeController", () => {
  let controller: SuscribeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuscribeController],
      providers: [SuscribeService],
    }).compile();

    controller = module.get<SuscribeController>(SuscribeController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
