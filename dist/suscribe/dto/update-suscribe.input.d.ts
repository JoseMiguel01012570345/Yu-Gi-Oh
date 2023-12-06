import { CreateSuscribeInput } from './create-suscribe.input';
declare const UpdateSuscribeInput_base: import("@nestjs/common").Type<Partial<CreateSuscribeInput>>;
export declare class UpdateSuscribeInput extends UpdateSuscribeInput_base {
    PlayerID: string;
    DeckID: number;
    TournamentDate: number;
    TournamentName: string;
}
export {};
