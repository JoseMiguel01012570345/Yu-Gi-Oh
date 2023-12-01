import { PartialType } from '@nestjs/mapped-types';
import { CreatePlayerDeckDto } from './create-player-deck.dto';

export class UpdatePlayerDeckDto extends PartialType(CreatePlayerDeckDto) {}
