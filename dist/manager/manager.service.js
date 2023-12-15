"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerService = void 0;
const common_1 = require("@nestjs/common");
const participate_service_1 = require("../participate/participate.service");
const haveweak_service_1 = require("../haveweak/haveweak.service");
const archetype_service_1 = require("../archetype/archetype.service");
const player_service_1 = require("../player/player.service");
const deck_service_1 = require("../deck/deck.service");
const have_service_1 = require("../have/have.service");
const belong_service_1 = require("../belong/belong.service");
const suscribe_service_1 = require("../suscribe/suscribe.service");
const tournament_service_1 = require("../tournament/tournament.service");
const match_service_1 = require("../match/match.service");
let ManagerService = class ManagerService {
    constructor(participateService, haveweakService, archetypeService, playerService, deckService, haveService, belongService, suscribeServcice, tournamentService, matchService) {
        this.participateService = participateService;
        this.haveweakService = haveweakService;
        this.archetypeService = archetypeService;
        this.playerService = playerService;
        this.deckService = deckService;
        this.haveService = haveService;
        this.belongService = belongService;
        this.suscribeServcice = suscribeServcice;
        this.tournamentService = tournamentService;
        this.matchService = matchService;
        this.participates = 1;
    }
    async checkPlayersExists(playersInput) {
        const players = await this.playerService.findAll();
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
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    async getPlayerForRound(matchsInput, TournamentInput) {
        let playersInput = [];
        for (let match of matchsInput) {
            let participants = null;
            try {
                participants = await this.participateService.findOne(TournamentInput.TournamentDate, TournamentInput.TournamentName, match.MatchID);
            }
            catch (error) {
                console.log("internal server error: ", error);
            }
            if (match.PlayerOneResult < match.PlayerTwoResult)
                playersInput.push(participants.PlayerOneID);
            else
                playersInput.push(participants.PlayerTwoID);
            if (match.PlayerOneResult == match.PlayerTwoResult) {
                playersInput.push(participants.PlayerOneID);
                playersInput.push(participants.PlayerTwoID);
            }
        }
        return playersInput;
    }
    async createPlayersMatchesStart(matchsInput, tournamentInput) {
        let matchs = [];
        let playersInput = await this.getPlayerForRound(matchsInput, tournamentInput);
        const status = await this.checkPlayersExists(playersInput);
        if (!status.Valid)
            return {
                Status: 'WRONG',
                Message: status.Message
            };
        for (let i = 0; i < playersInput.length; i += 1) {
            let j = i;
            let count = 0;
            while (count < playersInput.length) {
                if (j === playersInput.length - 1)
                    j = 0;
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
                try {
                    this.participateService.create(input);
                    this.matchService.create(match);
                    this.haveweakService.create({
                        TournamentDate: tournamentInput.TournamentDate,
                        TournamentName: tournamentInput.TournamentName,
                        MatchID: this.participates
                    });
                }
                catch (error) {
                    const response = {
                        Status: 'Wrong',
                        Message: error,
                        matchs: null
                    };
                    this.participates += 1;
                }
            }
            const response = {
                Status: 'OK',
                Message: 'All OK',
                matchs: await this.matchService.getMatchByTournamentAndRound(tournamentInput.TournamentDate, tournamentInput.TournamentName, 1)
            };
            return response;
        }
    }
    async createPlayersMatchesRandom(matchsInput, tournamentInput, round) {
        let matchs = [];
        let playersInput = await this.getPlayerForRound(matchsInput, tournamentInput);
        const status = await this.checkPlayersExists(playersInput);
        if (!status.Valid)
            return {
                Status: 'WRONG',
                Message: status.Message
            };
        let playerInMatchs = [];
        while (playerInMatchs.length == playersInput.length) {
            let playerOne = this.getRandomInt(0, playersInput.length);
            let playerTwo = this.getRandomInt(0, playersInput.length);
            if (playerInMatchs.find(element => element == playerOne || element === playerTwo))
                continue;
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
            try {
                this.participateService.create(input);
                this.matchService.create(match);
                this.haveweakService.create({
                    TournamentDate: tournamentInput.TournamentDate,
                    TournamentName: tournamentInput.TournamentName,
                    MatchID: this.participates
                });
            }
            catch (error) {
                const response = {
                    Status: 'Wrong',
                    Message: error,
                    matchs: null
                };
                this.participates += 1;
            }
        }
        const response = {
            Status: 'OK',
            Message: 'All OK',
            matchs: await this.matchService.getMatchByTournamentAndRound(tournamentInput.TournamentDate, tournamentInput.TournamentName, round)
        };
        return response;
    }
    checkArcheTypeExists(archetypes, archetype) {
        for (let i = 0; i < archetypes.length; i++) {
            if (archetypes[i].ArcheTypeName === archetype.ArcheTypeName)
                return true;
        }
        return false;
    }
    async registOnePlayer(playerInput, deckInput, archetypeInput, tournamentInput) {
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
            const response = {
                Status: 'OK',
                Message: 'All OK',
                matchs: null
            };
            return response;
        }
        catch (error) {
            const response = {
                Status: 'WRONG',
                Message: error,
                matchs: null
            };
            return response;
        }
    }
    async getPlayersSuscribeToTournament(tournamentDate, tournamentName) {
        return this.suscribeServcice.getSuscribesByTournament(tournamentDate, tournamentName);
    }
    async getPlayersOrderedByDeckCount() {
        const result = await this.haveService.getPlayersOrderedByDeckCount();
        let response = [];
        for (let i = 0; i < result.length; i++) {
            response.push(await this.playerService.findOne(result[i].PlayerID));
        }
        return response;
    }
    async getArcheTypesByDecksCount() {
        const result = await this.belongService.getArchetypeOrderedByDecksCount();
        let response = [];
        for (let i = 0; i < result.length; i++) {
            response.push(await this.archetypeService.findOne(result[i].ArcheTypeID));
        }
        return response;
    }
    async getTournamentWithArcheType(archetype) {
        const decks = await this.belongService.getDecksIDByArcheType(archetype);
        let has_players = [];
        for (let i = 0; i < decks.length; i++) {
            const result = await this.haveService.getPlayersByDeck(decks[i].DeckID);
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
    async getDecksByArcheType(archetype) {
        const results = await this.belongService.getDecksIDByArcheType(archetype);
        let decks = [];
        for (let i = 0; i < results.length; i++) {
            decks.push(await this.deckService.findOne(results[i].DeckID));
        }
        return decks;
    }
    async getPlayerChampion(tournamentName, tournamentDate) {
        const match = (await this.matchService.getMaxRoundsByTournament(tournamentName, tournamentDate))[0];
        const participates = await this.participateService.getParticipatesByMatch(match.MatchID);
        let participate;
        for (let i = 0; i < participates.length; i++) {
            let player1 = false;
            let player2 = false;
            let result = this.suscribeServcice.getSuscribeByPlayerID(participates[i].PlayerOneID);
            if (result.length !== 0)
                player1 = true;
            result = this.suscribeServcice.getSuscribeByPlayerID(participates[i].PlayerTwoID);
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
    async getPlayersMostWinnersInInterval(date1, date2) {
        const matchs = await this.matchService.getMatchsBettwenDates(date1, date2);
        let participates = [];
        for (let i = 0; i < matchs.length; i++) {
            participates.push(await this.participateService.findOne(matchs[i].TournamentDate, matchs[i].TournamentName, matchs[i].MatchID));
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
    async getArcheTypeMostUsedInTournament(tournamentDate, tournamentName) {
        const suscribes = await this.suscribeServcice.getSuscribesByTournament(tournamentDate, tournamentName);
        const archetypes = await this.archetypeService.findAll();
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
            const result = await this.belongService.getArcheTypesByDeckID(suscribes[i].DeckID);
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
    async getCountArcheTypesChampiom(date1, date2) {
        let tournaments = await this.tournamentService.findAll();
        tournaments = tournaments.filter(element => element.Date >= date1 && element.Date <= date2);
        let champions = [];
        for (let i = 0; i < tournaments.length; i++) {
            const champion = await this.getPlayerChampion(tournaments[i].TournamentName, tournaments[i].Date);
            champions.push({
                TournamentDate: tournaments[i].Date,
                TournamentName: tournaments[i].TournamentName,
                PlayerID: champion.PlayerName
            });
        }
        let suscribes = [];
        for (let i = 0; i < champions.length; i++) {
            const suscribe = await this.suscribeServcice.getSuscribesByTournamentsAndPlayer(champions[i].TournamentName, champions[i].TournamentDate, champions[i].PlayerID);
            suscribes.push((await this.belongService.getArcheTypesByDeckID(suscribe[i].DeckID))[0]);
        }
        let archetypes = [];
        const ArcheTypes = await this.archetypeService.findAll();
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
    async getPlaceMostWinnerInInterval(date1, date2) {
        let tournaments = await this.tournamentService.findAll();
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
    async getArcheTypesMostUsedByTournamentAndRound(tournamentDate, tournamentName, round) {
        const matchs = await this.matchService.getMatchByTournamentAndRound(tournamentDate, tournamentName, round);
        let players = [];
        for (let i = 0; i < matchs.length; i++) {
            const participates_result = await this.participateService.getAllParticipatesByID(tournamentDate, tournamentName, matchs[i].MatchID);
            await participates_result.forEach(element => {
                if (!players.includes(element.PlayerOneID))
                    players.push(element.PlayerOneID);
                if (!players.includes(element.PlayerTwoID))
                    players.push(element.PlayerTwoID);
            });
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
        let result = [];
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
        let result = [];
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
    async getPlayersWithDeckOfArcheType(archetype) {
        const have = await this.haveService.findAll();
        let count = 0;
        for (let i = 0; i < have.length; i++) {
            if ((await this.belongService.getArcheTypesByDeckID(have[i].DeckID))[0].ArcheTypeID === archetype)
                count += 1;
        }
        return count;
    }
    async getCountTournamentsWithArcheType(archetype) {
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
    async getArcheTypeSearchData(archetype) {
        const result = {
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
    async getDeckData(deckid) {
        const users = await this.haveService.getPlayersByDeck(deckid);
        const users_id = users.map(element => element.PlayerID);
        const result = {
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
    async getArcheTypeMostPopularInLocation(location) {
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
                        if (archetypesDict[k].count > max_count) {
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
                    if (max_count === 0) {
                        max_count = 1;
                        result = ArcheTypeID;
                    }
                }
            }
        }
        return result;
    }
    async getLocationData(location) {
        const archeTypeMostPopular = await this.getArcheTypeMostPopularInLocation(location);
        const tournaments = await this.tournamentService.getTournamentsByMunicipio(location);
        let PlayersCount = 0;
        let provincia = [];
        for (let i = 0; i < tournaments.length; i++) {
            let suscribers = (await this.suscribeServcice.getSuscribesByTournament(tournaments[i].Date, tournaments[i].TournamentName));
            for (let suscriber of suscribers) {
                provincia.push((await this.playerService.findOne(suscriber.PlayerID)).Provincia);
                let deck = (await this.archetypeService.findOne(archeTypeMostPopular));
                if (deck)
                    PlayersCount++;
            }
        }
        let femousProvincia = await this.mostPopularProvincia(provincia);
        const result = {
            Location: `${location}/${provincia}`,
            ArcheTypeMostMopular: archeTypeMostPopular,
            PlayersCount: PlayersCount,
            WinnersCount: tournaments.length
        };
        return result;
    }
    async mostPopularProvincia(provincia) {
        let mostPopular = [];
        let provinciaCopy = [];
        provincia.forEach(element => provinciaCopy.push(element));
        for (let index = 0; index < provincia.length; index++) {
            mostPopular.push(1);
            for (let index1 = index + 1; index1 < provincia.length; index1++) {
                if (provincia[index1] == provincia[index]) {
                    mostPopular[index]++;
                }
            }
            provincia = provincia.filter((element) => element != provincia[index]);
            index = -1;
        }
        let resoult = "";
        let best = 0;
        let index = 0;
        await mostPopular.forEach(element => {
            if (element > best) {
                best = element;
                resoult = provinciaCopy[index];
            }
            index++;
        });
        return resoult;
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
    async getTournamentData(date, name) {
        const tournament = await this.tournamentService.findOne(date, name);
        const tournamentWinner = await this.getPlayerChampion(name, date);
        const mostUsedArcheType = await this.getArcheTypeMostUsedInTournament(date, name);
        const result = {
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
        for (let i = 0; i < tournaments.length; i++) {
            result.push(await this.getTournamentData(tournaments[i].Date, tournaments[i].TournamentName));
        }
        return result;
    }
    async getUserSearchData(playerid) {
        const decksCount = (await this.haveService.getDecksByPlayer(playerid)).length;
        const suscribes = await this.suscribeServcice.getSuscribeByPlayerID(playerid);
        let count = 0;
        for (let i = 0; i < suscribes.length; i++) {
            const champion = await this.getPlayerChampion(suscribes[i].TournamentName, suscribes[i].TournamentDate);
            if (champion.PlayerName === playerid)
                count += 1;
        }
        const result = {
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
        for (let i = 0; i < players.length; i++) {
            result.push(await this.getUserSearchData(players[i].PlayerName));
        }
        return result;
    }
    async getUserdata(playerid) {
        const decks = await this.haveService.getDecksByPlayer(playerid);
        let decksinfo = [];
        for (let i = 0; i < decks.length; i++) {
            decksinfo.push(await this.getDeckData(decks[i].DeckID));
        }
        const suscribes = await this.suscribeServcice.getSuscribeByPlayerID(playerid);
        const tournaments = [];
        for (let i = 0; i < suscribes.length; i++) {
            tournaments.push(await this.tournamentService.findOne(suscribes[i].TournamentDate, suscribes[i].TournamentName));
        }
        const result = {
            ID: playerid,
            Decks: decksinfo,
            Tournaments: tournaments
        };
        return result;
    }
    async getAllUserData() {
        const players = await this.playerService.findAll();
        let result = [];
        for (let i = 0; i < players.length; i++) {
            result.push(await this.getUserdata(players[i].PlayerName));
        }
        return result;
    }
};
exports.ManagerService = ManagerService;
exports.ManagerService = ManagerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [participate_service_1.ParticipateService,
        haveweak_service_1.HaveweakService,
        archetype_service_1.ArchetypeService,
        player_service_1.PlayerService,
        deck_service_1.DeckService,
        have_service_1.HaveService,
        belong_service_1.BelongService,
        suscribe_service_1.SuscribeService,
        tournament_service_1.TournamentService,
        match_service_1.MatchService])
], ManagerService);
//# sourceMappingURL=manager.service.js.map