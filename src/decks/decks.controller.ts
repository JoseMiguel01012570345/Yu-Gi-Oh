import { Controller, Get } from '@nestjs/common';
import { DecksService } from './decks.service';

@Controller('decks')
export class DecksController {

    constructor(private readonly decksService: DecksService) {

    }

    @Get()
    getDecks() {
        let result = []
        const deck = this.decksService.getDecks();
        for(let i = 0; i < 10; i++)
            result.push(deck);
        return result;
    }
}
