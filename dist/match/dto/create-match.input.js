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
exports.CreateMatchInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateMatchInput = class CreateMatchInput {
};
exports.CreateMatchInput = CreateMatchInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Tournament's ID who this instance depends" }),
    __metadata("design:type", Number)
], CreateMatchInput.prototype, "TournamentDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: "Tournament's name" }),
    __metadata("design:type", String)
], CreateMatchInput.prototype, "TournamentName", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Match's id" }),
    __metadata("design:type", Number)
], CreateMatchInput.prototype, "MatchID", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Round" }),
    __metadata("design:type", Number)
], CreateMatchInput.prototype, "Rounds", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Player1's result in this match" }),
    __metadata("design:type", Number)
], CreateMatchInput.prototype, "PlayerOneResult", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Player2's result in this round" }),
    __metadata("design:type", Number)
], CreateMatchInput.prototype, "PlayerTwoResult", void 0);
exports.CreateMatchInput = CreateMatchInput = __decorate([
    (0, graphql_1.InputType)()
], CreateMatchInput);
//# sourceMappingURL=create-match.input.js.map