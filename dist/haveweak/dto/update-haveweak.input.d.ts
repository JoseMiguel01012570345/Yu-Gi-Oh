import { CreateHaveweakInput } from './create-haveweak.input';
declare const UpdateHaveweakInput_base: import("@nestjs/common").Type<Partial<CreateHaveweakInput>>;
export declare class UpdateHaveweakInput extends UpdateHaveweakInput_base {
    TournamentDate: number;
    TournamentName: string;
    MatchID: number;
}
export {};
