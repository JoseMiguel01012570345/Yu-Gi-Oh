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
exports.UpdateParticipateInput = void 0;
const create_participate_input_1 = require("./create-participate.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateParticipateInput = class UpdateParticipateInput extends (0, graphql_1.PartialType)(create_participate_input_1.CreateParticipateInput) {
};
exports.UpdateParticipateInput = UpdateParticipateInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Date of tournament' }),
    __metadata("design:type", Number)
], UpdateParticipateInput.prototype, "TournamentDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Name of tournament' }),
    __metadata("design:type", String)
], UpdateParticipateInput.prototype, "TournamentName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: "Player1's id" }),
    __metadata("design:type", String)
], UpdateParticipateInput.prototype, "PlayerOneID", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: "Player2's id" }),
    __metadata("design:type", String)
], UpdateParticipateInput.prototype, "PlayerTwoID", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "Match's id" }),
    __metadata("design:type", Number)
], UpdateParticipateInput.prototype, "MatchID", void 0);
exports.UpdateParticipateInput = UpdateParticipateInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateParticipateInput);
//# sourceMappingURL=update-participate.input.js.map