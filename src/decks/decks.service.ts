import { Injectable } from '@nestjs/common';

@Injectable()
export class DecksService {

    getDecks() {
        return {
            archetype: "Fiend",
            name: "Infernal"
        }
    }

}
