import { CreateTournamentInput } from './create-tournament.input';
declare const UpdateTournamentInput_base: import("@nestjs/common").Type<Partial<CreateTournamentInput>>;
export declare class UpdateTournamentInput extends UpdateTournamentInput_base {
    TournamentDate: number;
    TournamentName: string;
    TournamentDir: string;
}
export {};
