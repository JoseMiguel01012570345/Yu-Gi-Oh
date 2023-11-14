import { Injectable } from '@nestjs/common';

@Injectable()
export class CardsService {

    getCards() {
        return {
            name: 'Exodia',
            atk: 'inf',
            def: 'inf'
        }
    }
}
