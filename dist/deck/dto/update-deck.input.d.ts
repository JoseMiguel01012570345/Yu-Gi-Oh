import { CreateDeckInput } from './create-deck.input';
declare const UpdateDeckInput_base: import("@nestjs/common").Type<Partial<CreateDeckInput>>;
export declare class UpdateDeckInput extends UpdateDeckInput_base {
    DeckID: number;
    DeckName: string;
    MainDeckCount: number;
    SideDeckCount: number;
    ExtraDeckCount: number;
}
export {};
