import { CreateTournamentInput } from './create-tournament.input';
declare const UpdateTournamentInput_base: import("@nestjs/common").Type<Partial<CreateTournamentInput>>;
export declare class UpdateTournamentInput extends UpdateTournamentInput_base {
    TournamentID: string;
    TournamentDir: string;
}
export {};
