import { CreateMatchInput } from './create-match.input';
declare const UpdateMatchInput_base: import("@nestjs/common").Type<Partial<CreateMatchInput>>;
export declare class UpdateMatchInput extends UpdateMatchInput_base {
    TournamentDate: number;
    TournamentName: string;
    MatchID: number;
    Rounds: number;
    PlayerOneResult: number;
    PlayerTwoResult: number;
}
export {};
