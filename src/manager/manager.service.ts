import { Injectable } from '@nestjs/common';
import { Response, PlayerInput, TournamentInput, MatchInput, DeckInput, ArchetypeInput, BelongResponse, DeckResponse, PlayerResponse, ArcheTypeResponse, SuscribeResponse, HasResponse, TournamentResponse, ArcheTypeCountResponse, ArcheTypeSearchDataResponse, DeckDataResponse, LocationSearchDataResponse, TournamentSearchDataResponse, UserSearchData, UserDataResponse } from './dto/create-manager.input';
import { ParticipateService } from '../participate/participate.service';
import { HaveweakService } from '../haveweak/haveweak.service';
import { ArchetypeService } from '../archetype/archetype.service';
import { PlayerService } from '../player/player.service';
import { DeckService } from '../deck/deck.service';
import { HaveService } from '../have/have.service';
import { BelongService } from '../belong/belong.service';
import { SuscribeService } from '../suscribe/suscribe.service';
import { TournamentService } from '../tournament/tournament.service';
import { MatchService } from '../match/match.service';
import { getRandomValues } from 'crypto';

@Injectable()
export class ManagerService {

  private participates: number = 1;

  constructor(
    private readonly participateService: ParticipateService,
    private readonly haveweakService: HaveweakService,
    private readonly archetypeService: ArchetypeService,
    private readonly playerService: PlayerService,
    private readonly deckService: DeckService,
    private readonly haveService: HaveService,
    private readonly belongService: BelongService,
    private readonly suscribeServcice: SuscribeService,
    private readonly tournamentService: TournamentService,
    private readonly matchService: MatchService
  ) { }

  private async checkPlayersExists(playersInput: PlayerInput[]) {
    const players = await this.playerService.findAll()
    for (let i = 0; i < playersInput.length; i++) {
      let exists = false;
      for (let j = 0; j < players.length; j++) {
        if (players[j].PlayerName === playersInput[i].PlayerName && players[j].PlayerPassword === playersInput[i].PlayerPassword) {
          exists = true;
          break;
        }
      }
      if (!exists)
        return {
          Valid: false,
          Message: `The player ${playersInput[i]} doesn't exists`
        };
    }
    return {
      Valid: true,
      Message: 'OK'
    };
  }

   getRandomInt(min, max) { //get a random number in a interval
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

  async createPlayersMatchesStart(playersInput: PlayerInput[], tournamentInput: TournamentInput) {
   
    let matchs = [];
    const status = await this.checkPlayersExists(playersInput);
   
    if (!status.Valid)
      return {
        Status: 'WRONG',
        Message: status.Message
      };

      for (let i = 0; i < playersInput.length; i += 1) 
      {       
        let j=i; 
        let count=0
        while(count<playersInput.length) 
        {          
         
          if(j===playersInput.length-1)  j=0
            
          const input = {
            PlayerOneID: playersInput[i].PlayerName,
            PlayerTwoID: playersInput[j + 1].PlayerName,
            TournamentDate: tournamentInput.TournamentDate,
            TournamentName: tournamentInput.TournamentName,
            MatchID: this.participates
          };
         
          const match = {
            TournamentDate: tournamentInput.TournamentDate,
            TournamentName: tournamentInput.TournamentName,
            MatchID: input.MatchID,
            Rounds: 1,
            PlayerOneResult: -1,
            PlayerTwoResult: -1
          };
         
          matchs.push(match);
    
          try
          {
          this.participateService.create(input);
          this.matchService.create(match);
          this.haveweakService.create({
            TournamentDate: tournamentInput.TournamentDate,
            TournamentName: tournamentInput.TournamentName,
            MatchID: this.participates        
          });
  
        }
        catch (error) 
          {
            const response: Response = {
            Status: 'Wrong',
            Message: error
          }
          this.participates += 1;
        }
    }
      const response: Response = {
        Status: 'OK',
        Message: 'All OK'
      };
      return await this.matchService.getMatchByTournamentAndRound(tournamentInput.TournamentDate,tournamentInput.TournamentName,1);
  
      return response;
    }
  }

  async createPlayersMatchesRandom(playersInput: PlayerInput[], tournamentInput: TournamentInput, round: number){

    let matchs = [];
    const status = await this.checkPlayersExists(playersInput);
   
    if (!status.Valid)
      return {
        Status: 'WRONG',
        Message: status.Message
      };

      let playerInMatchs=[]

        while(playerInMatchs.length==playersInput.length)
        {

          let playerOne= this.getRandomInt(0,playersInput.length)
          let playerTwo= this.getRandomInt(0,playersInput.length)

          if(playerInMatchs.find(element=> element==playerOne || element===playerTwo ))
            continue

            const input = {
            PlayerOneID: playerOne,
            PlayerTwoID: playerTwo,
            TournamentDate: tournamentInput.TournamentDate,
            TournamentName: tournamentInput.TournamentName,
            MatchID: this.participates
          };
         
          const match = {
            TournamentDate: tournamentInput.TournamentDate,
            TournamentName: tournamentInput.TournamentName,
            MatchID: input.MatchID,
            Rounds: round,
            PlayerOneResult: -1,
            PlayerTwoResult: -1
          };
         
          matchs.push(match);
    
          try
          {
          this.participateService.create(input);
          this.matchService.create(match);
          this.haveweakService.create({
            TournamentDate: tournamentInput.TournamentDate,
            TournamentName: tournamentInput.TournamentName,
            MatchID: this.participates        
          });
  
        }
        catch (error) 
          {
            const response: Response = {
            Status: 'Wrong',
            Message: error
          }
          this.participates += 1;
    }
  }
      const response: Response = {
        Status: 'OK',
        Message: 'All OK'
      };
      return await this.matchService.getMatchByTournamentAndRound(tournamentInput.TournamentDate,tournamentInput.TournamentName,round);   
  }

  checkArcheTypeExists(archetypes: ArchetypeInput[], archetype: ArchetypeInput) {
    for (let i = 0; i < archetypes.length; i++) {
      if (archetypes[i].ArcheTypeName === archetype.ArcheTypeName)
        return true;
    }
    return false;
  }

  async registOnePlayer(playerInput: PlayerInput, deckInput: DeckInput, archetypeInput: ArchetypeInput, tournamentInput: TournamentInput) {
    const tournaments = await this.tournamentService.findAll();
    if (tournaments.length === 0)
      return {
        Status: 'WRONG',
        Message: "There aren't tournaments to suscribe"
      };
    let contains = false;
    for (let i = 0; i < tournaments.length; i++) {
      if (tournaments[i].TournamentName === tournamentInput.TournamentName && tournaments[i].Date === tournamentInput.TournamentDate) {
        contains = true;
        break;
      }
    }
    if (!contains)
      return {
        Status: 'WRONG',
        Message: `The tournament '${tournamentInput.TournamentName}' doesn't exists`
      };
    try {
      await this.playerService.create(playerInput);
      await this.deckService.create(deckInput);
      if (!this.checkArcheTypeExists(await this.archetypeService.findAll(), archetypeInput))
        await this.archetypeService.create(archetypeInput);
      await this.haveService.create({
        PlayerID: playerInput.PlayerName,
        DeckID: deckInput.DeckID
      });
      await this.belongService.create({
        DeckID: deckInput.DeckID,
        ArcheTypeID: archetypeInput.ArcheTypeName
      });
      await this.suscribeServcice.create({
        PlayerID: playerInput.PlayerName,
        DeckID: deckInput.DeckID,
        TournamentDate: tournamentInput.TournamentDate,
        TournamentName: tournamentInput.TournamentName
      });
      const response: Response = {
        Status: 'OK',
        Message: 'All OK'
      }
      return response;
    } catch (error) {
      const response: Response = {
        Status: 'WRONG',
        Message: error
      }
      return response;
    }
  }

  async getPlayersSuscribeToTournament(tournamentDate: number, tournamentName: string) {
    return this.suscribeServcice.getSuscribesByTournament(tournamentDate, tournamentName);
  }

  //query 1
  async getPlayersOrderedByDeckCount() {
    const result = await this.haveService.getPlayersOrderedByDeckCount() as any;
    let response: PlayerResponse[] = [];
    for (let i = 0; i < result.length; i++) {
      response.push(await this.playerService.findOne(result[i].PlayerID));
    }
    return response;
  }

  //query 2
  async getArcheTypesByDecksCount() {
    const result = await this.belongService.getArchetypeOrderedByDecksCount() as any;
    let response: ArcheTypeResponse[] = [];
    for (let i = 0; i < result.length; i++) {
      response.push(await this.archetypeService.findOne(result[i].ArcheTypeID));
    }
    return response;
  }

  //query 3
  async getTournamentWithArcheType(archetype: string) {
    const decks = await this.belongService.getDecksIDByArcheType(archetype) as any[];
    let has_players: HasResponse[] = [];
    for (let i = 0; i < decks.length; i++) {
      const result = await this.haveService.getPlayersByDeck(decks[i].DeckID) as any;
      for (let j = 0; j < result.length; j++) {
        has_players.push(result[j]);
      }
    }
    let suscriptions = [];
    let tournament = {
      TournamentDate: 0,
      TournamentName: ''
    };
    let max = 0;
    for (let i = 0; i < has_players.length; i++) {
      const result = await this.suscribeServcice.getTournamentByPlayerWithDeck(has_players[i].PlayerID, has_players[i].DeckID);
      for (let j = 0; j < result.length; j++) {
        let exists = false;
        for (let k = 0; k < suscriptions.length; k++) {
          if (suscriptions[k].TournamentDate === result[j].TournamentDate && suscriptions[k].TournamentName === result[j].TournamentName) {
            suscriptions[k].count += 1;
            exists = true;
            if (suscriptions[k].count > max) {
              tournament.TournamentDate = suscriptions[k].TournamentDate;
              tournament.TournamentName = suscriptions[k].TournamentName;
            }
            break;
          }
        }
        if (!exists) {
          suscriptions.push({
            TournamentDate: result[j].TournamentDate,
            TournamentName: result[j].TournamentName,
            count: 1
          });
          if (max === 0) {
            tournament = suscriptions[0];
          }
        }
      }
    }
    return await this.tournamentService.findOne(tournament.TournamentDate, tournament.TournamentName);
  }

  async getDecksByArcheType(archetype: string) {
    const results: BelongResponse[] = await this.belongService.getDecksIDByArcheType(archetype);
    let decks: DeckResponse[] = [];
    for (let i = 0; i < results.length; i++) {
      decks.push(await this.deckService.findOne(results[i].DeckID));
    }
    return decks;
  }

  //query 4
  async getPlayerChampion(tournamentName: string, tournamentDate: number) {
    const match = (await this.matchService.getMaxRoundsByTournament(tournamentName, tournamentDate) as any)[0];
    const participates = (await this.participateService.getParticipatesByMatch(match.MatchID) as any);
    let participate;
    for (let i = 0; i < participates.length; i++) {
      let player1 = false;
      let player2 = false;
      let result = this.suscribeServcice.getSuscribeByPlayerID(participates[i].PlayerOneID) as any;
      if (result.length !== 0)
        player1 = true;
      result = this.suscribeServcice.getSuscribeByPlayerID(participates[i].PlayerTwoID) as any;
      if (result !== 0)
        player2 = true;
      if (player1 && player2) {
        participate = participates[i];
        break;
      }
    }
    if (match.PlayerOneResult > match.PlayerTwoResult)
      return await this.playerService.findOne(participate.PlayerOneID);
    return await this.playerService.findOne(participate.PlayerTwoID);
  }

  //query 5
  async getPlayersMostWinnersInInterval(date1: number, date2: number) {
    const matchs = await this.matchService.getMatchsBettwenDates(date1, date2) as any;
    let participates = [];
    for (let i = 0; i < matchs.length; i++) {
      participates.push(await this.participateService.findOne(matchs[i].TournamentDate, matchs[i].TournamentName, matchs[i].MatchID) as any);
    }
    let Players = [];
    let players = [];
    for (let i = 0; i < participates.length; i++) {
      let playerid = participates[i].PlayerOneID;
      let exists = false;
      for (let j = 0; j < players.length; j++) {
        if (players[j].PlayerID === playerid) {
          players[j].count += participates[i].PlayerOneResult;
          exists = true;
          break;
        }
      }
      if (!exists)
        players.push({
          PlayerID: playerid,
          count: participates[i].PlayerOneResult
        });
      playerid = participates[i].PlayerTwoID;
      exists = false;
      for (let j = 0; j < players.length; j++) {
        if (players[j].PlayerID === playerid) {
          players[j].count += participates[i].PlayerTwoResult;
          exists = true;
          break;
        }
      }
      if (!exists)
        players.push({
          PlayerID: playerid,
          count: participates[i].PlayerTwoResult
        });
      for (let i = 0; i < players.length; i++) {
        for (let j = i; j < players.length; j++) {
          if (players[j].count > players[i].count) {
            let temp = players[j];
            players[j] = players[i];
            players[i] = temp;
          }
        }
      }
      for (let i = 0; i < players.length; i++) {
        Players.push(await this.playerService.findOne(players[i].PlayerID));
      }
    }
    return Players;
  }

  //query 6
  async getArcheTypeMostUsedInTournament(tournamentDate: number, tournamentName) {
    const suscribes = await this.suscribeServcice.getSuscribesByTournament(tournamentDate, tournamentName) as any;
    const archetypes = await this.archetypeService.findAll() as any;
    let archeTypesCount = [];
    for (let i = 0; i < archetypes.length; i++) {
      archeTypesCount.push({
        ArcheTypeID: archetypes[i].ArcheTypeName,
        count: 0
      });
    }
    let max = 0;
    let archeTypeID = '';
    for (let i = 0; i < suscribes.length; i++) {
      const result = await this.belongService.getArcheTypesByDeckID(suscribes[i].DeckID) as any;
      for (let j = 0; j < result.length; j++) {
        for (let k = 0; k < archeTypesCount.length; k++) {
          if (archeTypesCount[k].ArcheTypeID === result[j].ArcheTypeID) {
            archeTypesCount[k].count += 1;
            if (archeTypesCount[k].count > max) {
              max = archeTypesCount[k].count;
              archeTypeID = archeTypesCount[k].ArcheTypeID;
            }
            break;
          }
        }
      }
    }
    return await this.archetypeService.findOne(archeTypeID);
  }

  //query 7  
  async getCountArcheTypesChampiom(date1: number, date2: number) {
    let tournaments = await this.tournamentService.findAll() as any;
    tournaments = tournaments.filter(element => element.Date >= date1 && element.Date <= date2);
    let champions = [];
    for (let i = 0; i < tournaments.length; i++) {
      const champion = await this.getPlayerChampion(tournaments[i].TournamentName, tournaments[i].Date) as any;
      champions.push({
        TournamentDate: tournaments[i].Date,
        TournamentName: tournaments[i].TournamentName,
        PlayerID: champion.PlayerName
      });
    }
    let suscribes = [];
    for (let i = 0; i < champions.length; i++) {
      const suscribe = await this.suscribeServcice.getSuscribesByTournamentsAndPlayer(champions[i].TournamentName, champions[i].TournamentDate, champions[i].PlayerID) as any;
      suscribes.push((await this.belongService.getArcheTypesByDeckID(suscribe[i].DeckID) as any)[0]);
    }
    let archetypes = [];
    const ArcheTypes = await this.archetypeService.findAll() as any;
    for (let i = 0; i < ArcheTypes.length; i++) {
      archetypes.push({
        ArcheTypeName: ArcheTypes[i].ArcheTypeName,
        Count: 0
      });
    }
    for (let i = 0; i < suscribes.length; i++) {
      for (let j = 0; j < archetypes.length; j++) {
        if (archetypes[j].AcheTypeName === suscribes[i]) {
          archetypes[j].Count += 1;
        }
      }
    }
    return archetypes;
  }

  //query 8
  async getPlaceMostWinnerInInterval(date1: number, date2: number) {
    let tournaments: TournamentResponse[] = await this.tournamentService.findAll();
    tournaments = tournaments.filter(tournament => tournament.Date >= date1 && tournament.Date <= date2);
    let tournamentDict = [];
    if (tournaments.length == 0)
      return { Place: 'null' };
    let placeResult = tournaments[0].Municipio;
    let max_count = 0;
    await tournaments.forEach(tournament => {
      let exists = false;
      for (let i = 0; i < tournamentDict.length; i++) {
        if (tournamentDict[i].Place === tournament.Municipio) {
          tournamentDict[i].count += 1;
          exists = true;
          if (tournamentDict[i].count > max_count) {
            max_count = tournamentDict[i].count;
            placeResult = tournament.Municipio;
          }
          break;
        }
      }
      if (!exists)
        tournamentDict.push({
          Place: tournament.Municipio,
          count: 1
        });
    });
    return { Place: placeResult };
  }

  //query 9
  async getArcheTypesMostUsedByTournamentAndRound(tournamentDate: number, tournamentName: string, round: number) {
    const matchs = await this.matchService.getMatchByTournamentAndRound(tournamentDate, tournamentName, round);
    let players = [];
    for (let i = 0; i < matchs.length; i++) {
      const participates_result = await this.participateService.getAllParticipatesByID(tournamentDate, tournamentName, matchs[i].MatchID);
      await participates_result.forEach(element => {
        if (!players.includes(element.PlayerOneID))
          players.push(element.PlayerOneID);
        if (!players.includes(element.PlayerTwoID))
          players.push(element.PlayerTwoID);
      })
    }
    let decks = [];
    for (let i = 0; i < players.length; i++) {
      const suscribes = await this.suscribeServcice.getSuscribesByTournamentsAndPlayer(tournamentName, tournamentDate, players[i]);
      await suscribes.forEach(element => {
        let exists = false;
        for (let j = 0; j < decks.length; j++) {
          if (decks[i].DeckID === element.DeckID) {
            decks[i].count += 1;
            exists = true;
            break;
          }
        }
        if (!exists)
          decks.push({
            DeckID: element.DeckID,
            count: 1
          });
      });
    }
    let result: ArcheTypeCountResponse[] = [];
    for (let i = 0; i < decks.length; i++) {
      const archetype = (await this.belongService.getArcheTypesByDeckID(decks[i].DeckID))[0];
      console.log(archetype);
      result.push({
        ArcheTypeName: archetype.ArcheTypeID,
        Count: decks[i].count
      });
    }
    return result;
  }

  //query 10
  async getArcheTypesMostUsedByAtLeastOnePlayer() {
    const tournaments = await this.tournamentService.findAll();
    let decks = [];
    for (let i = 0; i < tournaments.length; i++) {
      const suscribes = await this.suscribeServcice.getSuscribesByTournament(tournaments[i].Date, tournaments[i].TournamentName);
      for (let j = 0; j < suscribes.length; j++) {
        let exists = false;
        for (let k = 0; k < decks.length; k++) {
          if (decks[k].DeckID === suscribes[j].DeckID) {
            exists = true;
            for (let r = 0; r < decks[k].tournamentsSelf.length; r++) {
              if (!(decks[k].tournamentsSelf[r].includes(tournaments[i]))) {
                decks[k].tournamentsSelf.push(tournaments[i]);
                break;
              }
            }
            break;
          }
        }
        if (!exists) {
          decks.push({
            DeckID: suscribes[i].DeckID,
            tournamentsSelf: [tournaments[i]]
          });
        }
      }
    }
    let result: ArcheTypeCountResponse[] = [];
    for (let i = 0; i < decks.length; i++) {
      result.push({
        ArcheTypeName: (await this.belongService.getArcheTypesByDeckID(decks[i].DeckID))[0].ArcheTypeID,
        Count: decks[i].tournamentsSelf.length
      });
    }
    for (let i = 0; i < result.length; i++) {
      for (let j = i + 1; j < result.length; j++) {
        if (result[j].Count > result[i].Count) {
          const temp = tournaments[j];
          tournaments[j] = tournaments[i];
          tournaments[i] = temp;
        }
      }
    }
    return result;
  }

  async getPlayersWithDeckOfArcheType(archetype: string) {
    const have = await this.haveService.findAll();
    let count = 0;
    for (let i = 0; i < have.length; i++) {
      if ((await this.belongService.getArcheTypesByDeckID(have[i].DeckID))[0].ArcheTypeID === archetype)
        count += 1;
    }
    return count;
  }

  async getCountTournamentsWithArcheType(archetype: string) {
    const tournaments = await this.tournamentService.findAll();
    const decks = await this.belongService.getDecksIDByArcheType(archetype);
    let count = 0;
    for (let i = 0; i < tournaments.length; i++) {
      let contains = false;
      const suscribes = await this.suscribeServcice.getSuscribesByTournament(tournaments[i].Date, tournaments[i].TournamentName);
      for (let j = 0; j < suscribes.length; j++) {
        for (let k = 0; k < decks.length; k++) {
          if (decks[k].DeckID === suscribes[j].DeckID) {
            contains = true;
            count += 1;
            break;
          }
        }
        if (contains)
          break;
      }
    }
    return count;
  }

  async getArcheTypeSearchData(archetype: string) {
    const result: ArcheTypeSearchDataResponse = {

      ArcheTypeName: archetype,
      MostPopularRegion: (await this.getTournamentWithArcheType(archetype)).Municipio,
      PlayersCount: await this.getPlayersWithDeckOfArcheType(archetype),
      TournamentsCount: await this.getCountTournamentsWithArcheType(archetype)

    };
    return result;
  }

  async getArcheTypesSearchData() {
    const archetypes = await this.archetypeService.findAll();
    let result = [];
    for (let i = 0; i < archetypes.length; i++)
      result.push(await this.getArcheTypeSearchData(archetypes[i].ArcheTypeName));
    return result;
  }

  async getDeckData(deckid: number) {
    const users = await this.haveService.getPlayersByDeck(deckid);
    const users_id = users.map(element => element.PlayerID);
    const result: DeckDataResponse = {
      ID: deckid,
      Name: (await this.deckService.findOne(deckid)).DeckName,
      Attribute: (await this.belongService.getArcheTypesByDeckID(deckid))[0].ArcheTypeID,
      UsersId: users_id
    };
    return result;
  }

  async getAllDecksData() {
    const decks = await this.deckService.findAll();
    let decksdata = [];
    for (let i = 0; i < decks.length; i++) {
      decksdata.push(await this.getDeckData(decks[i].DeckID));
    }
    return decksdata;
  }

  async getArcheTypeMostPopularInLocation(location: string) {

    const tournaments = await this.tournamentService.getTournamentsByMunicipio(location);
    let archetypesDict = [];
    let result = null;
    let max_count = 0;

    for (let i = 0; i < tournaments.length; i++) {
    
      const suscribes = await this.suscribeServcice.getSuscribesByTournament(tournaments[i].Date, tournaments[i].TournamentName);
    
      for (let j = 0; j < suscribes.length; j++) {
    
        const { ArcheTypeID } = (await this.belongService.getArcheTypesByDeckID(suscribes[j].DeckID))[0];
    
        let exists = false;
    
        for (let k = 0; k < archetypesDict.length; k++) {
    
          if (archetypesDict[k].ArcheTypeID === ArcheTypeID) {
    
            exists = true;
            archetypesDict[k].count += 1;
    
            if (archetypesDict[k].count > max_count) 
            {
              result = ArcheTypeID;
              max_count = archetypesDict[k].count;
            }
            break;
          }
        }
        if (!exists) {

          archetypesDict.push({
            ArcheTypeID: ArcheTypeID,
            count: 1
          
          });
          
          if (max_count === 0) 
          {
            max_count = 1;
            result = ArcheTypeID;
          }
        }
      }
    }
    return result;
  }

  async getLocationData(location: string) {
    const archeTypeMostPopular = await this.getArcheTypeMostPopularInLocation(location);
    const tournaments = await this.tournamentService.getTournamentsByMunicipio(location);
    let PlayersCount = 0;
    let provincia=[]

    //find how many player have an arquetype in a region

    for (let i = 0; i < tournaments.length; i++) { // pass through tournaments asking for suscribers
      
      let suscribers= (await this.suscribeServcice.getSuscribesByTournament(tournaments[i].Date, tournaments[i].TournamentName));
      
        for(let suscriber of suscribers){ // pass for suscribers asking for decks of archetype whose name is the most popular

          provincia.push((await this.playerService.findOne(suscriber.PlayerID)).Provincia)
          let deck = (await this.archetypeService.findOne(archeTypeMostPopular))
          
          if(deck ) PlayersCount++ // if there is a suscriber that have such arcketype, then add it to the count
          
        }

    }

    let femousProvincia= await this.mostPopularProvincia(provincia)

    const result: LocationSearchDataResponse = {
      Location: `${location}/${provincia}`,
      ArcheTypeMostMopular: archeTypeMostPopular,
      PlayersCount: PlayersCount,
      WinnersCount: tournaments.length
    };
    return result;
  }

  async mostPopularProvincia(provincia: string []){

    let mostPopular=[]
    let provinciaCopy=[]
    provincia.forEach(element=> provinciaCopy.push(element))

    for (let index = 0; index < provincia.length; index++) {
      
      mostPopular.push(1)
      for (let index1 = index + 1 ; index1 < provincia.length; index1++) {
        
        if(provincia[index1]==provincia[index]) { //count how many provincias is repeated
          mostPopular[index]++
        }
        
      }

      provincia= provincia.filter((element)=> element!=provincia[index]) // delete all of those provincias repeated
      index=-1 // start from 0 again
    }

    let resoult=""
    let best=0
    let index=0

    await mostPopular.forEach(element=>{

      if(element>best) {
        best=element
        resoult=provinciaCopy[index] // find out what is the provincia that has biggest number in its index
      }
      index++
    })

    return resoult
  }
  async getAllLocationDataSearch() {
    let locations = [];
    const tournaments = await this.tournamentService.findAll();
    for (let i = 0; i < tournaments.length; i++) {
      if (!locations.includes(`${tournaments[i].Municipio} ${tournaments[i].Provincia}`))
        locations.push(`${tournaments[i].Municipio} ${tournaments[i].Provincia}`);
    }
    let result = [];
    for (let i = 0; i < locations.length; i++) {
      result.push(await this.getLocationData(locations[i]));
    }
    return result;
  }

  async getTournamentData(date: number, name: string) {
    const tournament = await this.tournamentService.findOne(date, name);
    const tournamentWinner = await this.getPlayerChampion(name, date);
    const mostUsedArcheType = await this.getArcheTypeMostUsedInTournament(date, name);
    const result: TournamentSearchDataResponse = {
      TournamentName: tournament.TournamentName,
      TournamentDate: tournament.Date,
      Location: `${tournament.Municipio} ${tournament.Provincia}`,
      Winner: tournamentWinner.PlayerName,
      ArcheTypeMostUsed: mostUsedArcheType.ArcheTypeName
    };
    return result;
  }

  async getAllTournamentData() {
    const tournaments = await this.tournamentService.findAll();
    let result = [];
    for(let i = 0; i < tournaments.length; i++) {
      result.push(await this.getTournamentData(tournaments[i].Date,tournaments[i].TournamentName));
    }
    return result;
  }

  async getUserSearchData(playerid: string) {
    const decksCount = (await this.haveService.getDecksByPlayer(playerid)).length;
    const suscribes = await this.suscribeServcice.getSuscribeByPlayerID(playerid);
    let count = 0;
    for(let i = 0; i < suscribes.length; i++) {
      const champion = await this.getPlayerChampion(suscribes[i].TournamentName,suscribes[i].TournamentDate);
      if (champion.PlayerName === playerid)
        count += 1;
    }
    const result: UserSearchData = {
      Name: playerid,
      DecksCount: decksCount,
      Participations: suscribes.length,
      WinnsCount: count
    };
    return result;
  }

  async getAllUserSearchData() {
    const players = await this.playerService.findAll();
    let result = [];
    for(let i = 0; i < players.length; i++) {
      result.push(await this.getUserSearchData(players[i].PlayerName));
    }
    return result;
  }

  async getUserdata(playerid: string) {
    const decks = await this.haveService.getDecksByPlayer(playerid);
    let decksinfo = [];
    for(let i = 0; i < decks.length; i ++) {
      decksinfo.push(await this.getDeckData(decks[i].DeckID));
    }
    const suscribes =  await this.suscribeServcice.getSuscribeByPlayerID(playerid);
    const tournaments = [];
    for(let i = 0; i < suscribes.length; i++) {
      tournaments.push(await this.tournamentService.findOne(suscribes[i].TournamentDate,suscribes[i].TournamentName));
    }
    const result: UserDataResponse = {
      ID: playerid,
      Decks: decksinfo,
      Tournaments: tournaments
    };
    return result;
  }

  async getAllUserData() {
    const players = await this.playerService.findAll();
    let result = [];
    for(let i = 0; i < players.length; i++) {
      result.push(await this.getUserdata(players[i].PlayerName));
    }
    return result;
  }
}
