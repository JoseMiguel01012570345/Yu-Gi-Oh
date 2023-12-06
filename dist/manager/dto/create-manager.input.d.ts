export declare class Response {
    Status: string;
    Message: string;
}
export declare class SuscribeResponse {
    PlayerID: string;
    DeckID: number;
    TournamentDate: number;
    TournamentName: string;
}
export declare class BelongResponse {
    ArcheTypeID: string;
    DeckID: number;
}
export declare class PlayerInput {
    PlayerName: string;
    PlayerPassword: string;
}
export declare class MatchInput {
    MatchID: number;
}
export declare class TournamentInput {
    TournamentDate: number;
    TournamentName: string;
}
export declare class DeckInput {
    DeckID: number;
    DeckName: string;
    MainDeckCount: number;
    SideDeckCount: number;
    ExtraDeckCount: number;
}
export declare class ArchetypeInput {
    ArcheTypeName: string;
}
