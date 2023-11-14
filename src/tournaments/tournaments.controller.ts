import { Controller, Get } from '@nestjs/common';
import { TournamentsService } from './tournaments.service';

@Controller('tournaments')
export class TournamentsController {

    constructor(private readonly tournamentsService: TournamentsService) {

    }

    @Get()
    getTournaments() {
        let result = [];
        const tournament = this.tournamentsService.getTournaments();
        for (let i = 0; i < 10; i++)
            result.push(tournament);
        return result;
    }
}
