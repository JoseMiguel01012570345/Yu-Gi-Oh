import { Injectable } from '@nestjs/common';
import { CreateParticipateDto } from './dto/create-participate.dto';
import { UpdateParticipateDto } from './dto/update-participate.dto';

@Injectable()
export class ParticipateService {
  create(createParticipateDto: CreateParticipateDto) {
    return 'This action adds a new participate';
  }

  findAll() {
    return `This action returns all participate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} participate`;
  }

  update(id: number, updateParticipateDto: UpdateParticipateDto) {
    return `This action updates a #${id} participate`;
  }

  remove(id: number) {
    return `This action removes a #${id} participate`;
  }
}
