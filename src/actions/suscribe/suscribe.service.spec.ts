import { Test, TestingModule } from "@nestjs/testing";
import { SuscribeService } from "./suscribe.service";

describe("SuscribeService", () => {
  let service: SuscribeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuscribeService],
    }).compile();

    service = module.get<SuscribeService>(SuscribeService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
