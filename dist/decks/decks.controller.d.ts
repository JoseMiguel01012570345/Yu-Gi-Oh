import { DecksService } from "./decks.service";
export declare class DecksController {
    private readonly decksService;
    constructor(decksService: DecksService);
    getDecks(): any[];
}
