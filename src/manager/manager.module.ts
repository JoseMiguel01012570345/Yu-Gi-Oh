import { Module } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { ManagerResolver } from './manager.resolver';
import { ParticipateModule } from '../participate/participate.module';
import { HaveweakModule } from '../haveweak/haveweak.module';
import { ArchetypeModule } from '../archetype/archetype.module';
import { DeckModule } from '../deck/deck.module';
import { PlayerModule } from 'src/player/player.module';
import { HaveModule } from '../have/have.module';
import { BelongModule } from '../belong/belong.module';
import { SuscribeModule } from '../suscribe/suscribe.module';
import { TournamentModule } from '../tournament/tournament.module';
import { MatchModule } from '../match/match.module';

@Module({
  providers: [ManagerResolver, ManagerService],
  imports: [
    ParticipateModule,
    HaveweakModule,
    ArchetypeModule,
    DeckModule,
    PlayerModule,
    HaveModule,
    BelongModule,
    SuscribeModule,
    TournamentModule,
    MatchModule
  ]
})
export class ManagerModule {}
