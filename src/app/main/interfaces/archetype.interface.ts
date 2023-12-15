export interface ArchetypeSearchData {
  name:   string;
  mostPopularRegion: string;
  amountsOfPlayerUsingIt: number;
  amountOfTournamentsWhereIsUsed: number;
}

export interface ArchetypesResponse {
  archetypes: Archetype[];
}

export interface Archetype {
  ArcheTypeName: string;
}
