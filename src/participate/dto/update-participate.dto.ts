import { PartialType } from '@nestjs/mapped-types';
import { CreateParticipateDto } from './create-participate.dto';

export class UpdateParticipateDto extends PartialType(CreateParticipateDto) {}
