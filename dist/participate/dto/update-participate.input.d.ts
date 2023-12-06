import { CreateParticipateInput } from './create-participate.input';
declare const UpdateParticipateInput_base: import("@nestjs/common").Type<Partial<CreateParticipateInput>>;
export declare class UpdateParticipateInput extends UpdateParticipateInput_base {
    PlayerOneID: string;
    PlayerTwoID: string;
    MatchID: number;
}
export {};
