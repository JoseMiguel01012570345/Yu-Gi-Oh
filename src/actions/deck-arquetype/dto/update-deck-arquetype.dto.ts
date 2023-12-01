import { PartialType } from '@nestjs/mapped-types';
import { CreateDeckArquetypeDto } from './create-deck-arquetype.dto';

export class UpdateDeckArquetypeDto extends PartialType(CreateDeckArquetypeDto) {}
