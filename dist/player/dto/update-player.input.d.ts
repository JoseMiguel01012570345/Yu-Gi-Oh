import { CreatePlayerInput } from './create-player.input';
declare const UpdatePlayerInput_base: import("@nestjs/common").Type<Partial<CreatePlayerInput>>;
export declare class UpdatePlayerInput extends UpdatePlayerInput_base {
    PlayerName: string;
    PlayerPassword: string;
}
export {};
