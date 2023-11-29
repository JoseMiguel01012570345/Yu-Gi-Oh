import { PartialType } from '@nestjs/mapped-types';
import { CreateDecksDbDto } from './create-decks_db.dto';

export class UpdateDecksDbDto extends PartialType(CreateDecksDbDto) {}
