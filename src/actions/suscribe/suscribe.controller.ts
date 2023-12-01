import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { SuscribeService } from "./suscribe.service";
import { CreateSuscribeDto } from "./dto/create-suscribe-.dto";
import { UpdateSuscribeDto } from "./dto/update-suscribe-.dto";

@Controller("suscribe-")
export class SuscribeController {
  constructor(private readonly suscribeService: SuscribeService) {}

  @Post()
  create(@Body() createSuscribeDto: CreateSuscribeDto) {
    return this.suscribeService.create(createSuscribeDto);
  }

  @Get()
  findAll() {
    return this.suscribeService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.suscribeService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateSuscribeDto: UpdateSuscribeDto
  ) {
    return this.suscribeService.update(+id, updateSuscribeDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.suscribeService.remove(+id);
  }
}
