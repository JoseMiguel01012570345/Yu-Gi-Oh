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
exports.UpdateTournamentInput = void 0;
const create_tournament_input_1 = require("./create-tournament.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateTournamentInput = class UpdateTournamentInput extends (0, graphql_1.PartialType)(create_tournament_input_1.CreateTournamentInput) {
};
exports.UpdateTournamentInput = UpdateTournamentInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Tournament Date. Most be a string with format \n(year)(mounth)(day)" }),
    __metadata("design:type", Number)
], UpdateTournamentInput.prototype, "TournamentDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: "Tournament's name" }),
    __metadata("design:type", String)
], UpdateTournamentInput.prototype, "TournamentName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: "Location of tournament" }),
    __metadata("design:type", String)
], UpdateTournamentInput.prototype, "TournamentDir", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Municipio' }),
    __metadata("design:type", String)
], UpdateTournamentInput.prototype, "Municipio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Provincia' }),
    __metadata("design:type", String)
], UpdateTournamentInput.prototype, "Provincia", void 0);
exports.UpdateTournamentInput = UpdateTournamentInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateTournamentInput);
//# sourceMappingURL=update-tournament.input.js.map