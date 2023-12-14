export declare class Response {
    Status: string;
    Message: string;
}
export declare class DeckDataResponse {
    ID: number;
    Name: string;
    Attribute: string;
    UsersId: string[];
}
export declare class TournamentSearchDataResponse {
    TournamentName: string;
    Location: string;
    TournamentDate: number;
    ArcheTypeMostUsed: string;
    Winner: string;
}
export declare class UserSearchData {
    Name: string;
    DecksCount: number;
    Participations: number;
    WinnsCount: number;
}
export declare class UserDataResponse {
    ID: string;
    Tournaments: TournamentResponse[];
    Decks: DeckDataResponse[];
}
export declare class LocationSearchDataResponse {
    Location: string;
    ArcheTypeMostMopular: string;
    PlayersCount: number;
    WinnersCount: number;
}
export declare class ArcheTypeSearchDataResponse {
    ArcheTypeName: string;
    MostPopularRegion: string;
    PlayersCount: number;
    TournamentsCount: number;
}
export declare class ArcheTypeResponse {
    ArcheTypeName: string;
}
export declare class TournamentResponse {
    Date: number;
    TournamentName: string;
    TournamentDir: string;
}
export declare class ArcheTypeCountResponse {
    ArcheTypeName: string;
    Count: number;
}
export declare class PlaceResponse {
    Place: string;
}
export declare class HasResponse {
    PlayerID: string;
    DeckID: number;
}
export declare class PlayerResponse {
    PlayerName: string;
    PlayerPassword: string;
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
export declare class DeckResponse {
    DeckID: number;
    DeckName: string;
    MainDeckCount: number;
    SideDeckCount: number;
    ExtraDeckCount: number;
}
export declare class PlayerInput {
    PlayerName: string;
    PlayerPassword: string;
    Roll: string;
    Municipio: string;
    Provincia: string;
    Tel: number;
    Dir: string;
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
