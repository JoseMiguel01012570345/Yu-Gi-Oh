import { PartialType } from '@nestjs/mapped-types';
import { CreateArquetypeDto } from './create-arquetype.dto';

export class UpdateArquetypeDto extends PartialType(CreateArquetypeDto) {}
