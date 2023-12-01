import { Injectable } from '@nestjs/common';
import { CreateSuscribeDto } from './dto/create-suscribe-.dto';
import { UpdateSuscribeDto } from './dto/update-suscribe-.dto';

@Injectable()
export class SuscribeService {
  create(createSuscribeDto: CreateSuscribeDto) {
    return 'This action adds a new suscribe';
  }

  findAll() {
    return `This action returns all suscribe`;
  }

  findOne(id: number) {
    return `This action returns a #${id} suscribe`;
  }

  update(id: number, updateSuscribeDto: UpdateSuscribeDto) {
    return `This action updates a #${id} suscribe`;
  }

  remove(id: number) {
    return `This action removes a #${id} suscribe`;
  }
}
