import { Module } from "@nestjs/common";
import { SuscribeService } from "./suscribe.service";
import { SuscribeController } from "./suscribe.controller";

@Module({
  controllers: [SuscribeController],
  providers: [SuscribeService],
})
export class SuscribeModule {}
