import { PartialType } from '@nestjs/mapped-types';
import { CreateSuscribeDto } from './create-suscribe-.dto';

export class UpdateSuscribeDto extends PartialType(CreateSuscribeDto) {}
