import { Controller,Get } from '@nestjs/common';
import { CardsService } from './cards.service';

@Controller('cards')
export class CardsController {

    constructor(private readonly cardsService: CardsService) {

    }

    @Get()
    getCards() {
        let result = [];
        const card = this.cardsService.getCards(); 
        for(let i = 0; i < 10; i++)
            result.push(card);
        return result;
    }
}
