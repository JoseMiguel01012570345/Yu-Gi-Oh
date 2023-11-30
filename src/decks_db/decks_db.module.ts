import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DecksDbService } from "./decks_db.service";
import { DecksDbController } from "./decks_db.controller";
//import { DecksDb } from './entities/decks_db.entity';

@Module({
  controllers: [DecksDbController],
  providers: [DecksDbService],
  imports: [
    //  TypeOrmModule.forFeature([DecksDb])
  ],
})
export class DecksDbModule {}
